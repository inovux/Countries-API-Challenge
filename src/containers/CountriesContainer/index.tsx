import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from '../../store/state'
import { countryActions } from '../../store/countries/actions'

export const CountriesContainer: FC = () => {
    const dispatch = useDispatch()
    const { data, isLoading } = useSelector(
        (state: IRootState) => state.countries
    )

    useEffect(() => {
        console.log('wtf')
        dispatch(countryActions.get.started({}))
    }, [])

    if (isLoading) {
        return <div>Loading...</div>
    }
    return <div>lul</div>
    // return <CountryCardList countries={data} />
}
