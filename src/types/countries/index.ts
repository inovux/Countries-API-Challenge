export interface ICurrency {
    code: string
    name: string
    symbol: string
}

export interface ILanguage {
    iso639_1: string
    iso639_2: string
    name: string
    nativeName: string
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
    capital: string
    currencies: ICurrency[]
    flags: IFlags
    languages: ILanguage[]
    nativeLanguage: string
    population: number
    region: string
    subregion: string
    topLevelDomain: string[]
}

export interface IGetByRegionApiParams {
    region?: string
}

export interface IGetByNameApiParams {
    name?: string
}

export type IApiCountryView = IApiCountry[]
