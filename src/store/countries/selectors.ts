import { IRootState } from '../state'

export const countrySelectors = {
    filter: (state: IRootState) => state.filters.countries,
    error: (state: IRootState) => state.countries.error,
}
