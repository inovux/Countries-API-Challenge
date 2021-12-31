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
