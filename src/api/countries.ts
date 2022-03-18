import { apiInstance } from './index'
import { IApiCountryView } from '../types'

export const countriesRequests = {
    getCountries: async (): Promise<IApiCountryView> => {
        const response = await apiInstance.get('/all')
        return response.data
    },
    getCountriesByRegion: async (params: { region: string }) => {
        const response = await apiInstance.get(`/continent/${params.region}`)
        return response.data
    },
}
