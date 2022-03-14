import { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PageTemplate } from '../PageTemplate'
import { CountryCardList } from '../../components/CountryCardList'
import { ActionBar } from '../../components/ActionBar'
import { countryActions } from '../../store/countries/actions'
import { IOption } from '../../components/Select/Option'
import { countriesRequests } from '../../api/countries'
import { countrySelectors } from '../../store/countries/selectors'

// const countries = [
//     {
//         country: 'The Netherlands',
//         population: 20000000,
//         region: 'Utrecht',
//         capital: 'Amsterdam',
//         flagUrl: 'https://flagcdn.com/w320/nl.png',
//     },
//     {
//         country: 'Germany',
//         population: 100000000,
//         region: 'Munich',
//         capital: 'Munich',
//         flagUrl: 'https://flagcdn.com/w320/de.png',
//     },
//     {
//         country: 'Belgium',
//         population: 100000000,
//         region: 'Brussels',
//         capital: 'Brussels',
//         flagUrl: 'https://flagcdn.com/w320/be.png',
//     },
//     {
//         country: 'France',
//         population: 100000000,
//         region: 'Paris',
//         capital: 'Paris',
//         flagUrl: 'https://flagcdn.com/w320/fr.png',
//     },
//     {
//         country: 'France',
//         population: 100000000,
//         region: 'Paris',
//         capital: 'Paris',
//         flagUrl: 'https://flagcdn.com/w320/fr.png',
//     },
//     {
//         country: 'Belgium',
//         population: 100000000,
//         region: 'Brussels',
//         capital: 'Brussels',
//         flagUrl: 'https://flagcdn.com/w320/be.png',
//     },
//     {
//         country: 'Germany',
//         population: 100000000,
//         region: 'Munich',
//         capital: 'Munich',
//         flagUrl: 'https://flagcdn.com/w320/de.png',
//     },
//     {
//         country: 'The Netherlands',
//         population: 20000000,
//         region: 'Utrecht',
//         capital: 'Amsterdam',
//         flagUrl: 'https://flagcdn.com/w320/nl.png',
//     },
// ]

export const CountriesPage: FC = () => {
    const dispatch = useDispatch()
    const filter = useSelector(countrySelectors.filter)
    const [countries, setCountries] = useState([])

    useEffect(() => {
        dispatch(countryActions.get.started({}))
        countriesRequests.getCountries().then((data) => {
            setCountries(data as any)
        })
    }, [])

    const handleSearch = (value: string) => {
        dispatch(countryActions.setSearch({ search: value }))
    }

    const handleSelectRegion = (option: IOption) => {
        dispatch(countryActions.selectRegion(option))
    }

    return (
        <PageTemplate>
            <ActionBar
                onSelectRegion={handleSelectRegion}
                onSearch={handleSearch}
                searchValue={filter?.search}
                regionValue={filter?.region}
            />
            <CountryCardList countries={countries} />
        </PageTemplate>
    )
}
