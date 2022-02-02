import { FC } from 'react'
import { Header } from '../../components/Header'
import styles from './PageTemplate.module.css'

export const PageTemplate: FC = ({ children }) => {
    return (
        <div className={styles.pageContainer}>
            <Header />
            <div className={styles.contentContainer}>{children}</div>
        </div>
    )
}
