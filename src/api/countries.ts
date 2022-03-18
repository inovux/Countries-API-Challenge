import { apiInstance } from './index'
import { IApiCountryView, IGetByRegionApiParams } from '../types'

export const countriesRequests = {
    getCountries: async (): Promise<IApiCountryView> => {
        const response = await apiInstance.get('/all')
        return response.data
    },
    getCountriesByRegion: async (params: IGetByRegionApiParams) => {
        const response = await apiInstance.get(`/region/${params.region}`)
        return response.data
    },
}
