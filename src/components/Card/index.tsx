import styles from './Card.module.css'
import { numberFormatter } from '../../utils/numberFormatter'

export interface ICard {
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
}: ICard) => {
    return (
        <div className={styles.container}>
            <img
                className={styles.flag}
                src={flagUrl}
                alt={`${country} flag`}
            />
            <div className={styles.textContainer}>
                <h2>{country}</h2>
                <p>Population: {numberFormatter(population, 0)}</p>
                <p>Region: {region}</p>
                <p>Capital: {capital}</p>
            </div>
        </div>
    )
}
