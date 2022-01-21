import { ICountry, ICountryFilter } from '../types'

export interface IRootState {
    countries: ICountry[]
    filters: {
        countries: ICountryFilter
    }
}

export const RootState: IRootState = {
    countries: [],
    filters: {
        countries: {},
    },
}
