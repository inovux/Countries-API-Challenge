import styles from './CountryCard.module.css'
import { numberFormatter } from '../../utils/numberFormatter'

export interface ICountry {
    country: string
    population: number
    region: string
    capital: string
    flagUrl: string
}

export const Card = ({
    country,
    population,
    region,
    capital,
    flagUrl,
}: ICountry) => {
    return (
        <div className={styles.container}>
            <img
                className={styles.flag}
                src={flagUrl}
                alt={`${country} flag`}
            />
            <div className={styles.textContainer}>
                <h2>{country}</h2>
                <div>
                    <p>Population: {numberFormatter(population, 0)}</p>
                    <p>Region: {region}</p>
                    <p>Capital: {capital}</p>
                </div>
            </div>
        </div>
    )
}
