import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { PageTemplate } from '../PageTemplate'

export const CountryPage: FC = () => {
    const { code } = useParams()

    return <PageTemplate>{code}</PageTemplate>
}
