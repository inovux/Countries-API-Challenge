import { FC } from 'react'
import styles from './Hello.module.css'

export const Hello: FC<{ text: string }> = ({ text }) => {
    return <div className={styles.container}>{text}</div>
}
