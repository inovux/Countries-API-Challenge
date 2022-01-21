import { useDispatch } from 'react-redux'
import { CountryCardList } from './components/CountryCardList'
import { IOption, Option } from './components/Select/Option'
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
    const dispatch = useDispatch()

    const handleSelect = (option: IOption) => {
        dispatch({ type: 'SELECT', payload: { value: option } })
    }

    return (
        <div>
            <CountryCardList countries={countries} />
            <Select
                onSelect={handleSelect}
                placeholder="Please select something..."
            >
                <Option label="Africa" value="africa" />
                <Option label="Antarctica" value="antarctica" />
                <Option label="Asia" value="asia" />
                <Option label="Europe" value="europe" />
                <Option label="North America" value="north-america" />
                <Option label="Oceania" value="oceania" />
                <Option label="South America" value="south-america" />
            </Select>
        </div>
    )
}
