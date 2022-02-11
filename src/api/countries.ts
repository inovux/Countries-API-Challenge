import { apiInstance } from './index'

export const countriesRequests = {
    getCountries: (params?: Record<string, any>) =>
        apiInstance.get('/all', { params }),
}
