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

 */

interface ISelect {
    value: string
    placeholder: string
}

export const Select = ({ value, placeholder }: ISelect) => {
    return (
        <div>
            Select Component {value} {placeholder}
        </div>
    )
}
