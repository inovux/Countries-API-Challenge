import { apiInstance } from './index'
import { ICountry } from '../types'

export const countriesRequests = {
    getCountries: (params?: Record<string, any>): Promise<ICountry[]> =>
        apiInstance.get('/all', { params }),
}
