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
                const handleOnClick = (countryCode: string) => {
                    console.log('navigate to ', countryCode)
                }

                return (
                    <div key={country.name.official} className={styles.item}>
                        <div className={styles.cardContainer}>
                            <Card
                                onClick={handleOnClick}
                                countryCode={country.cca2}
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
