import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from '../../store/state'
import { countryActions } from '../../store/countries/actions'
import { CountryCardList } from '../../components/CountryCardList'

export const CountriesContainer: FC = () => {
    const dispatch = useDispatch()
    const { data, isLoading } = useSelector(
        (state: IRootState) => state.countries
    )

    useEffect(() => {
        dispatch(countryActions.get.started({}))
    }, [])

    if (isLoading || !data.length) {
        return <div>Loading...</div>
    }

    return <CountryCardList countries={data} />
}
