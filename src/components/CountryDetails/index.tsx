import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './CountryDetails.module.css'
import { Group } from '../Group'
import { Chip } from '../Chip'
import { IApiCountry, ICurrency } from '../../types'
import { Button } from '../Button'

interface ICountryDetails {
    country: IApiCountry
}

const getCurrencies = (currencies: ICurrency[]) => {
    const currenciesArray = Object.values(currencies)

    return currenciesArray.map((currency) => {
        return currency.name
    })
}

const getLanguages = (languages: { [key: string]: string }) => {
    const languagesArray = Object.keys(languages)

    return languagesArray.map((language) => {
        return languages[language]
    })
}

export const CountryDetails: FC<ICountryDetails> = ({ country }) => {
    const navigate = useNavigate()

    const navigateBack = () => {
        navigate('/')
    }

    return (
        <div>
            <div className={styles.backButton}>
                <Button onClick={navigateBack} text="Back" />
            </div>
            <div className={styles.container}>
                <div className={styles.flagContainer}>
                    <img
                        className={styles.flag}
                        src={country.flags.png}
                        alt="country flag"
                    />
                </div>
                <div className={styles.contentContainer}>
                    <h2>{country.name.official}</h2>
                    <div className={styles.contentInnerContainer}>
                        <div>
                            <div>Native Name: {country.name.official}</div>
                            <div>Population: {country.population}</div>
                            <div>Region: {country.region}</div>
                            <div>Sub Region: {country.subregion}</div>
                            <div>Capital: {country.capital}</div>
                        </div>
                        <div>
                            <div>Top Level Domain: {country.tld}</div>
                            <div>
                                Currencies:{' '}
                                {getCurrencies(country.currencies).join(', ')}
                            </div>
                            <div>
                                Language:{' '}
                                {getLanguages(country.languages).join(', ')}
                            </div>
                        </div>
                    </div>
                    <Group>
                        Border Countries:{' '}
                        {country.borders.map((border) => {
                            return <Chip text={border} />
                        })}
                    </Group>
                </div>
            </div>
        </div>
    )
}
