import { FC, memo, useEffect, useMemo, useRef, useState } from 'react'
import { SelectContext } from './context'
import { IOption } from './Option'

import styles from './Select.module.css'

interface ISelect {
    initialValue?: IOption
    placeholder: string
    width?: number
    onSelect: (option: IOption) => void
}

export const Select: FC<ISelect> = memo(
    ({ placeholder, initialValue = null, children, width = 200, onSelect }) => {
        const [isOpen, setIsOpen] = useState(false)
        const [selectedValue, setSelectedValue] = useState(initialValue)

        const selectRef = useRef<HTMLDivElement>(null)

        const handleIsOpen = () => {
            setIsOpen((isOpenState) => {
                return !isOpenState
            })
        }

        const handleClickOutside = (event: any) => {
            if (!selectRef?.current?.contains(event.target)) {
                setIsOpen(false)
            }
        }

        useEffect(() => {
            document.addEventListener('click', handleClickOutside, {
                capture: true,
            })

            return () => {
                document.removeEventListener('click', handleClickOutside)
            }
        }, [])

        const handleSelect = ({ label, value }: IOption) => {
            if (value !== selectedValue?.value) {
                setIsOpen(false)
                setSelectedValue({ label, value })
                onSelect({ label, value })
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
                <div ref={selectRef} className={styles.container}>
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
