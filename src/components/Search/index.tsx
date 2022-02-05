import { FC, SyntheticEvent, useState } from 'react'
import styles from './Search.module.css'

interface ISearch {
    initialValue?: string
    onChange?: (value: string) => void
    placeholder: string
}

export const Search: FC<ISearch> = ({
    initialValue = '',
    onChange,
    placeholder,
}) => {
    const [value, setValue] = useState(initialValue)

    const handleOnChange = (e: SyntheticEvent<HTMLInputElement>) => {
        onChange?.(e.currentTarget.value)

        setValue(e.currentTarget.value)
    }

    return (
        <input
            className={styles.container}
            placeholder={placeholder}
            type="text"
            onChange={handleOnChange}
            value={value}
        />
    )
}
