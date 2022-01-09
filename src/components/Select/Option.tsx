import { useSelectContext } from '../../utils/hooks'

export interface IOption {
    value: string
    label: string
}

export const Option = ({ value, label }: IOption) => {
    const selectContext = useSelectContext()

    const handleClick = () => {
        selectContext.onSelect({ value, label })
    }

    // TODO: Fix role here should be "button" with additional changes
    return (
        <div role="presentation" onClick={handleClick}>
            {label}
        </div>
    )
}
