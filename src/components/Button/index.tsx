import { FC } from 'react'

import styles from './Button.module.css'

interface IButton {
    text: string
    icon?: string
    onClick: () => void
}

export const Button: FC<IButton> = ({ text, icon, onClick }) => {
    return (
        <button type="button" onClick={onClick} className={styles.container}>
            <span className={styles.icon}>{icon && 'ICON'}</span>
            <span className={styles.icon}>{text}</span>
        </button>
    )
}
