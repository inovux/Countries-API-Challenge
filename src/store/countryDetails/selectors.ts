import { IRootState } from '../state'

export const countryDetailsSelectors = {
    data: (state: IRootState) => state.countryDetails.data,
    isLoading: (state: IRootState) => state.countryDetails.isLoading,
    error: (state: IRootState) => state.countryDetails.error,
}
