import { Card } from '../CountryCard'

import styles from './CountryCardList.module.css'
import { IApiCountryView } from '../../types'

interface ICountryCardList {
    countries: IApiCountryView
}

export const CountryCardList = ({ countries }: ICountryCardList) => {
    return (
        <div className={styles.container}>
            {countries.map((country) => {
                return (
                    <div key={country.name.official} className={styles.item}>
                        <div className={styles.cardContainer}>
                            <Card
                                country={country.name.official}
                                capital={country.capital}
                                region={country.region}
                                flagUrl={country.flags.png}
                                population={country.population}
                            />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
