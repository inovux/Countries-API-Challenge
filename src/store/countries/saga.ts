import { all, debounce, put, takeEvery, select } from 'redux-saga/effects'
import { AnyAction } from 'redux'
import { Success } from 'typescript-fsa'
import { countryActions } from './actions'
import { countrySelectors } from './selectors'
import { countriesRequests } from '../../api/countries'
import { IApiCountryView, IGetByRegionApiParams } from '../../types'

function* filterRequest() {
    const state: ReturnType<typeof countrySelectors.filter> = yield select(
        countrySelectors.filter
    )

    const params = {
        region: state.region,
        name: state.search,
    }

    yield put(countryActions.getByRegion.started(params))
}

function* getCountries(action: AnyAction) {
    try {
        const data: Success<{}, IApiCountryView> =
            yield countriesRequests.getCountries()

        yield put(countryActions.get.done(data))
    } catch (e: any) {
        yield put(countryActions.get.failed(e))
    }

    return action.payload
}

function* getCountriesByRegion(action: AnyAction) {
    try {
        const data: Success<IGetByRegionApiParams, IApiCountryView> =
            yield countriesRequests.getCountriesByRegion({
                region: action.payload.region,
            })

        yield put(countryActions.getByRegion.done(data))
    } catch (e: any) {
        yield put(countryActions.getByRegion.failed(e))
    }

    return action.payload
}

export default function* rootSaga() {
    yield all([
        takeEvery(countryActions.get.started, getCountries),
        takeEvery(countryActions.selectRegion.type, filterRequest),
        takeEvery(countryActions.getByRegion.started, getCountriesByRegion),
        debounce(200, countryActions.setSearch.type, filterRequest),
    ])
}
