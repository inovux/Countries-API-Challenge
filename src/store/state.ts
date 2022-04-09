import { IApiCountryView, ICountryFilter, IApiCountryError } from '../types'

export interface IRootState {
    countries: {
        data: IApiCountryView
        isLoading: boolean
        error?: IApiCountryError
    }
    filters: {
        countries: ICountryFilter
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
}
