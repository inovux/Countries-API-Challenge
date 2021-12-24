import styles from './styles.module.css'

interface ICard {
    country: string
    population: number
    region: string
    capital: string
}

export const Card = ({ country, population, region, capital }: ICard) => {
    return (
        <div className={styles.container}>
            <p>IMAGE HERE</p>
            <h2>{country}</h2>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <p>Capital: {capital}</p>
        </div>
    )
}
