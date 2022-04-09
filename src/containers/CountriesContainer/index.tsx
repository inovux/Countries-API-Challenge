import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from '../../store/state'
import { countryActions } from '../../store/countries/actions'
import { CountryCardList } from '../../components/CountryCardList'
import { Loader } from '../../components/Loader'

export const CountriesContainer: FC = () => {
    const dispatch = useDispatch()
    const countries = useSelector((state: IRootState) => state.countries.data)
    const { data, isLoading, error } = useSelector(
        (state: IRootState) => state.countries
    )

    useEffect(() => {
        if (!countries.length) {
            dispatch(countryActions.get.started({}))
        }
    }, [])

    if (isLoading) {
        return <Loader />
    }

    if (error?.status === 404) {
        return <div>No countries found</div>
    }

    return <CountryCardList countries={data} />
}
