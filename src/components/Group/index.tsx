import { FC } from 'react'
import styles from './Group.module.css'

export const Group: FC = ({ children }) => {
    return <div className={styles.container}>{children}</div>
}
