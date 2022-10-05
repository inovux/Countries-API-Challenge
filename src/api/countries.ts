import { apiInstance } from './index'
import { IApiCountryView, IGetByRegionApiParams } from '../types'
import { IGetByCountryCodeApiParams } from '../types/countries'

export const countriesRequests = {
    getCountries: async (): Promise<IApiCountryView> => {
        const response = await apiInstance.get('/all')
        return response.data
    },
    getCountriesByRegion: async (params: IGetByRegionApiParams) => {
        const response = await apiInstance.get(`/region/${params.region}`)
        return response.data
    },
    getCountriesByName: async (params: any) => {
        const response = await apiInstance.get(`/name/${params.name}`)
        return response.data
    },
    getCountryByCode: async (params: IGetByCountryCodeApiParams) => {
        const response = await apiInstance.get(`/alpha/${params.code}`)
        return response.data
    },
}
