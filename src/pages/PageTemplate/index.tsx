import { FC } from 'react'
import { Header } from '../../components/Header'

export const PageTemplate: FC = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}
