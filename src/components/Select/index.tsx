import { FC, memo, useCallback, useMemo, useState } from 'react'
import { SelectContext } from './context'
import { IOption } from './Option'

interface ISelect {
    initialValue?: IOption
    placeholder: string
}

export const Select: FC<ISelect> = memo(
    ({ placeholder, initialValue = null, children }) => {
        const [isOpen, setIsOpen] = useState(false)
        const [selectedValue] = useState(initialValue)

        const handleIsOpen = useCallback(() => {
            setIsOpen((isOpenState) => {
                console.log(isOpenState)
                return !isOpenState
            })
        }, [])

        const value = useMemo(
            () => ({
                value: selectedValue,
            }),
            [selectedValue]
        )

        /* TODO: role should be fixed here and changed to button with necessary changes */
        return (
            <SelectContext.Provider value={value}>
                <div role="presentation" onClick={handleIsOpen}>
                    {selectedValue ? selectedValue.label : placeholder}
                    {isOpen && children}
                </div>
            </SelectContext.Provider>
        )
    }
)
