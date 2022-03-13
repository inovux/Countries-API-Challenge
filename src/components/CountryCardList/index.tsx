import { Card } from '../CountryCard'

import styles from './CountryCardList.module.css'
import { IApiCountry } from '../../types/countries'

interface ICountryCardList {
    countries: IApiCountry[]
}

export const CountryCardList = ({ countries }: ICountryCardList) => {
    return (
        <div className={styles.container}>
            {countries.map((country) => {
                return (
                    <div className={styles.item}>
                        <div className={styles.cardContainer}>
                            <Card
                                country={country.name}
                                capital={country.capital}
                                region={country.region}
                                flagUrl={country.flags.png}
                                population={country.population}
                                key={country.name}
                            />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
