import { FC } from 'react'
// import styles from './Countries.module.css'
import { PageTemplate } from '../PageTemplate'
import { CountryCardList } from '../../components/CountryCardList'

const countries = [
    {
        country: 'The Netherlands',
        population: 20000000,
        region: 'Utrecht',
        capital: 'Amsterdam',
        flagUrl: 'https://flagcdn.com/w320/nl.png',
    },
    {
        country: 'Germany',
        population: 100000000,
        region: 'Munich',
        capital: 'Munich',
        flagUrl: 'https://flagcdn.com/w320/de.png',
    },
    {
        country: 'Belgium',
        population: 100000000,
        region: 'Brussels',
        capital: 'Brussels',
        flagUrl: 'https://flagcdn.com/w320/be.png',
    },
    {
        country: 'France',
        population: 100000000,
        region: 'Paris',
        capital: 'Paris',
        flagUrl: 'https://flagcdn.com/w320/fr.png',
    },
]

export const CountriesPage: FC = () => {
    return (
        <PageTemplate>
            <CountryCardList countries={countries} />
        </PageTemplate>
    )
}
