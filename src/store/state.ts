import { IApiCountryView, ICountryFilter } from '../types'

export interface IRootState {
    countries: {
        data: IApiCountryView
        isLoading: boolean
    }
    filters: {
        countries: ICountryFilter
    }
}

export const RootState: IRootState = {
    countries: {
        data: [],
        isLoading: false,
    },
    filters: {
        countries: {
            search: undefined,
            region: undefined,
        },
    },
}
