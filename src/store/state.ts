import { ICountryFilter } from '../types'

export interface IRootState {
    filters: {
        countries?: ICountryFilter
    }
}

export const RootState: IRootState = {
    filters: {},
}
