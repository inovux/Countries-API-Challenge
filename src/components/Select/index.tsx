/*

Select API:

<Select
    placeholder="Placeholder text when not selected"
    value="theValue1"
    onChange={doSomething()}
    onReset={doSomeResetFunctionality()}>
    <Select.Option value="theValue1" label="My Label 1" />
    <Select.Option value="theValue2" label="My Label 2" />
    <Select.Option value="theValue3" label="My Label 3" />
</Select>

- Select box should open on the selected value in the list (placeholder or current value).
- Add support for dropdown not being out of the view of the browser

Select holds the state of the current selected option (value). The Select.Option component should have an internal "selected" property that is active when the value inside Select is the same as the Select.Option value. When the Select.Option is selected the list should start from that item's position whenever the dropdown opens up. It should also show the label of the selected option when the dropdown is closed as it is the selected value.

Options and Select component should be connected using the context API. The Option component can be in a separate file using the created Select context's onChange and value properties (Basic Compound component).

SelectContextProperties: {
    value: string,
    onChange: (e) => string
}

 */

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
