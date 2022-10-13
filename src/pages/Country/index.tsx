import { FC } from 'react'
import { PageTemplate } from '../PageTemplate'

import { CountryContainer } from '../../containers/CountryContainer'

export const CountryPage: FC = () => {
    return (
        <PageTemplate>
            <CountryContainer />
        </PageTemplate>
    )
}
