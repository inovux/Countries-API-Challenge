import { FC, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { PageTemplate } from '../PageTemplate'
import { Button } from '../../components/Button'

import styles from './Country.module.css'
import { countryDetailsActions } from '../../store/countryDetails/actions'
import { Chip } from '../../components/Chip'
import { Group } from '../../components/Group'

export const CountryPage: FC = () => {
    const dispatch = useDispatch()
    const { code } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(countryDetailsActions.getByCountryCode.started({ code }))
    }, [])

    const navigateBack = () => {
        navigate('/')
    }

    return (
        <PageTemplate>
            <div className={styles.backButton}>
                <Button onClick={navigateBack} text="Back" />
            </div>
            <div className={styles.container}>
                <div className={styles.flagContainer}>
                    <img
                        className={styles.flag}
                        src="https://flagcdn.com/w320/py.png"
                        alt="country flag"
                    />
                </div>
                <div className={styles.contentContainer}>
                    <h2>Belgium</h2>
                    <div className={styles.contentInnerContainer}>
                        <div>
                            <div>Native Name: </div>
                            <div>Population: </div>
                            <div>Region: </div>
                            <div>Sub Region: </div>
                            <div>Capital: </div>
                        </div>
                        <div>
                            <div>Top Level Domain: {code}</div>
                            <div>Currencies:</div>
                            <div>Language: {code}</div>
                        </div>
                    </div>
                    <Group>
                        Border Countries:
                        <Chip text="France" />
                        <Chip text="Belgium" />
                        <Chip text="Germany" />
                    </Group>
                </div>
            </div>
        </PageTemplate>
    )
}
