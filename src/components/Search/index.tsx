import { FC, SyntheticEvent, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
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
    const inputElement = useRef<HTMLInputElement>(null)

    const handleOnChange = (e: SyntheticEvent<HTMLInputElement>) => {
        onChange?.(e.currentTarget.value)

        setValue(e.currentTarget.value)
    }

    const handleOnFocus = () => {
        inputElement.current?.focus()
    }

    return (
        <div
            role="searchbox"
            className={styles.container}
            onFocus={handleOnFocus}
            tabIndex={0}
        >
            <FontAwesomeIcon
                size="lg"
                icon={solid('magnifying-glass')}
                className={styles.icon}
            />
            <input
                className={styles.inputContainer}
                ref={inputElement}
                placeholder={placeholder}
                type="text"
                onChange={handleOnChange}
                value={value}
            />
        </div>
    )
}
