import { FC } from 'react'
import { Header } from '../../components/Header'
import styles from './PageTemplate.module.css'

export const PageTemplate: FC = ({ children }) => {
    return (
        <div>
            <Header />
            <div className={styles.container}>{children}</div>
        </div>
    )
}
