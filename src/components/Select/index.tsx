import { FC, memo, useCallback, useMemo, useState } from 'react'
import { SelectContext } from './context'
import { IOption } from './Option'

import styles from './Select.module.css'

interface ISelect {
    initialValue?: IOption
    placeholder: string
}

export const Select: FC<ISelect> = memo(
    ({ placeholder, initialValue = null, children }) => {
        const [isOpen, setIsOpen] = useState(false)
        const [selectedValue, setSelectedValue] = useState(initialValue)

        const handleIsOpen = useCallback(() => {
            setIsOpen((isOpenState) => {
                console.log(isOpenState)
                return !isOpenState
            })
        }, [])

        const value = useMemo(
            () => ({
                value: selectedValue,
                onSelect: setSelectedValue,
            }),
            [selectedValue]
        )

        /* TODO: role should be fixed here and changed to button with necessary changes */
        return (
            <SelectContext.Provider value={value}>
                <div className={styles.container}>
                    <div
                        className={styles.selectContainer}
                        role="presentation"
                        onClick={handleIsOpen}
                    >
                        {selectedValue ? selectedValue.label : placeholder}
                    </div>
                    {isOpen && (
                        <div className={styles.optionsContainer}>
                            {children}
                        </div>
                    )}
                </div>
            </SelectContext.Provider>
        )
    }
)
