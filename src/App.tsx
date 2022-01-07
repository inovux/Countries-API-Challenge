import { CountryCardList } from './components/CountryCardList'
import { Option } from './components/Select/Option'
import { Select } from './components/Select'

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

export const App = () => {
    return (
        <div>
            <CountryCardList countries={countries} />
            <Select placeholder="Please select something...">
                <Option value="ello" label="ELLO" />
            </Select>
        </div>
    )
}
