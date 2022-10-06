import { all, put, takeEvery } from 'redux-saga/effects'
import { AnyAction } from 'redux'
import { Success } from 'typescript-fsa'
import { countryDetailsActions } from './actions'
import { countriesRequests } from '../../api/countries'
import { IApiCountry } from '../../types'
import { IGetByCountryCodeApiParams } from '../../types/countries'

function* getCountryByCode(action: AnyAction) {
    try {
        const data: Success<IGetByCountryCodeApiParams, IApiCountry> =
            yield countriesRequests.getCountryByCode({
                code: action.payload.code,
            })

        yield put(countryDetailsActions.getByCountryCode.done(data))
    } catch (e: any) {
        yield put(countryDetailsActions.getByCountryCode.failed(e))
    }

    return action.payload
}

export default function* rootSaga() {
    yield all([
        takeEvery(
            countryDetailsActions.getByCountryCode.started,
            getCountryByCode
        ),
    ])
}
