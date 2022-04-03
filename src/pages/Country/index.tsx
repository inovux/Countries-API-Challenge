import { FC } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { PageTemplate } from '../PageTemplate'

export const CountryPage: FC = () => {
    const { code } = useParams()
    const navigate = useNavigate()

    const navigateBack = () => {
        navigate('/')
    }

    return (
        <PageTemplate>
            <div onClick={navigateBack}>Back</div>
            <div>
                <div>Flag</div>
                <div>
                    <div>
                        <div>{code}</div>
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
                <div>Border Countries: 1, 2, 3</div>
            </div>
        </PageTemplate>
    )
}
