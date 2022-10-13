export interface ICurrency {
    code: string
    name: string
    symbol: string
}

export interface ILanguage {
    [key: string]: string
}

export interface IFlags {
    svg: string
    png: string
}

export interface ICountryName {
    common: string
    official: string
}

export interface IApiCountry {
    name: ICountryName
    borders: string[]
    cca2: string
    capital: string
    currencies: ICurrency[]
    flags: IFlags
    languages: ILanguage
    nativeLanguage: string
    population: number
    region: string
    subregion: string
    tld: string
}

export interface IGetByRegionApiParams {
    region?: string
}

export interface IGetByNameApiParams {
    name?: string
}

export interface IGetByCountryCodeApiParams {
    code?: string
}

export type IApiCountryView = IApiCountry[]

export interface IApiCountryError {
    message: string
    status: number
}
