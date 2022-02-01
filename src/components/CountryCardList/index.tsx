import { Card, ICountry } from '../CountryCard'

import styles from './CountryCardList.module.css'

interface ICountryCardList {
    countries: ICountry[]
}

export const CountryCardList = ({ countries }: ICountryCardList) => {
    return (
        <div className={styles.container}>
            {countries.map((country) => {
                return (
                    <div className={styles.item}>
                        <div className={styles.cardContainer}>
                            <Card
                                country={country.country}
                                capital={country.capital}
                                region={country.region}
                                flagUrl={country.flagUrl}
                                population={country.population}
                                key={country.country}
                            />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
