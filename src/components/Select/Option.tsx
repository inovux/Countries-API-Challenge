import { useSelectContext } from '../../utils/hooks'

export interface IOption {
    value: string
    label: string
}

export const Option = ({ value, label }: IOption) => {
    const selectContext = useSelectContext()

    console.log(selectContext)

    return (
        <div>
            {value}
            {label}
        </div>
    )
}
