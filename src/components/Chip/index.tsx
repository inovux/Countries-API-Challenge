import { FC } from 'react'

import styles from './Chip.module.css'

interface IChip {
    text: string
}

export const Chip: FC<IChip> = ({ text }) => {
    return <div className={styles.container}>{text}</div>
}
