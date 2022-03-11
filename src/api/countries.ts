import { apiInstance } from './index'
import { ICountry } from '../types'

export const countriesRequests = {
    getCountries: async (params?: Record<string, any>): Promise<ICountry[]> => {
        const response = await apiInstance.get('/all', { params })

        return response.data
    },
}
