import actionCreatorFactory from 'typescript-fsa'
import {
    IApiCountry,
    IApiCountryError,
    IGetByCountryCodeApiParams,
} from '../../types/countries'

const actionCreator = actionCreatorFactory('countryDetails')

export const countryDetailsActionsTypes = {
    GET_BY_CODE: 'GET_BY_CODE',
}

export const countryDetailsActions = {
    getByCountryCode: actionCreator.async<
        IGetByCountryCodeApiParams,
        IApiCountry,
        IApiCountryError
    >(countryDetailsActionsTypes.GET_BY_CODE),
}
