import {
    IApiCountryView,
    ICountryFilter,
    IApiCountryError,
    IApiCountry,
} from '../types'

export interface IRootState {
    countries: {
        data: IApiCountryView
        isLoading: boolean
        error?: IApiCountryError
    }
    filters: {
        countries: ICountryFilter
    }
    countryDetails: {
        data?: IApiCountry
        isLoading: boolean
        error?: IApiCountryError
    }
}

export const RootState: IRootState = {
    countries: {
        data: [],
        isLoading: false,
        error: undefined,
    },
    filters: {
        countries: {
            search: undefined,
            region: undefined,
        },
    },
    countryDetails: {
        data: undefined,
        isLoading: false,
        error: undefined,
    },
}
