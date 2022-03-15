import { apiInstance } from './index'
import { IApiCountryView } from '../types'

export const countriesRequests = {
    getCountries: async (
        params?: Record<string, any>
    ): Promise<IApiCountryView> => {
        const response = await apiInstance.get('/all', { params })
        return response.data
    },
}
