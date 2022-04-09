import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PageTemplate } from '../PageTemplate'
import { ActionBar } from '../../components/ActionBar'
import { countryActions } from '../../store/countries/actions'
import { IOption } from '../../components/Select/Option'
import { countrySelectors } from '../../store/countries/selectors'
import { CountriesContainer } from '../../containers'

export const CountriesPage: FC = () => {
    const dispatch = useDispatch()
    const filter = useSelector(countrySelectors.filter)

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
            <CountriesContainer />
        </PageTemplate>
    )
}
