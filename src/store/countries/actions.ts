import actionCreatorFactory from 'typescript-fsa'
import { IOption } from '../../components/Select/Option'
import { IApiCountryView, IGetByRegionApiParams } from '../../types'

const actionCreator = actionCreatorFactory('countries')

export const countryActionsTypes = {
    GET: 'GET',
    GET_BY_REGION: 'GET_BY_REGION',
    SELECT_REGION: 'SELECT_REGION',
    SET_SEARCH: 'SET_SEARCH',
}

export const countryActions = {
    selectRegion: actionCreator<IOption>(countryActionsTypes.SELECT_REGION),
    get: actionCreator.async<{}, IApiCountryView, {}>(countryActionsTypes.GET),
    setSearch: actionCreator<{ search: string }>(
        countryActionsTypes.SET_SEARCH
    ),
    getByRegion: actionCreator.async<
        IGetByRegionApiParams,
        IApiCountryView,
        {}
    >(countryActionsTypes.GET_BY_REGION),
}
