import { createContext } from 'react'
import { IOption } from './Option'

// TODO: add width property given to the Select component so the Option can have the same width as given to the Select parent component

interface ISelectContext {
    value: IOption | null
    onSelect: (option: IOption) => void
}

export const SelectContext = createContext<ISelectContext | null>(null)
