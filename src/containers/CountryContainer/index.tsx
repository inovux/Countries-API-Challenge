import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { IRootState } from '../../store/state'
import { Loader } from '../../components/Loader'
import { countryDetailsActions } from '../../store/countryDetails/actions'
import { CountryDetails } from '../../components/CountryDetails'

export const CountryContainer: FC = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const country = useSelector(
        (state: IRootState) => state.countryDetails.data
    )
    const { isLoading, error } = useSelector(
        (state: IRootState) => state.countryDetails
    )

    useEffect(() => {
        dispatch(
            countryDetailsActions.getByCountryCode.started({
                code: params.code,
            })
        )
    }, [])

    if (isLoading || !country) {
        return <Loader />
    }

    if (error?.status === 404) {
        return <div>No countries found</div>
    }

    return <CountryDetails country={country!} />
}
