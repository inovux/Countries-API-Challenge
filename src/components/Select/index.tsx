import { FC, memo, useCallback, useMemo, useState } from 'react'
import { SelectContext } from './context'
import { IOption } from './Option'

import styles from './Select.module.css'

interface ISelect {
    initialValue?: IOption
    placeholder: string
    width?: number
}

export const Select: FC<ISelect> = memo(
    ({ placeholder, initialValue = null, children, width = 200 }) => {
        const [isOpen, setIsOpen] = useState(false)
        const [selectedValue, setSelectedValue] = useState(initialValue)

        const handleIsOpen = useCallback(() => {
            setIsOpen((isOpenState) => {
                return !isOpenState
            })
        }, [])

        const handleSelect = ({ label, value }: IOption) => {
            if (value !== selectedValue?.value) {
                setIsOpen(false)
                setSelectedValue({ label, value })
            }
        }

        const value = useMemo(
            () => ({
                value: selectedValue,
                onSelect: handleSelect,
                width,
            }),
            [selectedValue, width]
        )

        /* TODO: role should be fixed here and changed to button with necessary changes */
        return (
            <SelectContext.Provider value={value}>
                <div className={styles.container}>
                    <div
                        className={styles.selectContainer}
                        role="presentation"
                        onClick={handleIsOpen}
                        style={{ width: `${width}px` }}
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
