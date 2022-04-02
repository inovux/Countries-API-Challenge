import { useNavigate } from 'react-router-dom'
import { Card } from '../CountryCard'

import styles from './CountryCardList.module.css'
import { IApiCountryView } from '../../types'

interface ICountryCardList {
    countries: IApiCountryView
}

export const CountryCardList = ({ countries }: ICountryCardList) => {
    const navigate = useNavigate()

    return (
        <div className={styles.container}>
            {countries.map((country) => {
                const handleOnClick = (countryCode: string) => {
                    navigate(`/country/${countryCode}`)
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
