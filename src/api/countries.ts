import { apiInstance } from './index'
import { IApiCountry } from '../types'

export const countriesRequests = {
    getCountries: async (
        params?: Record<string, any>
    ): Promise<IApiCountry[]> => {
        const response = await apiInstance.get('/all', { params })
        return response.data
    },
}
