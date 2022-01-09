import { createContext } from 'react'
import { IOption } from './Option'

interface ISelectContext {
    value: IOption | null
    onSelect: (option: IOption) => void
}

export const SelectContext = createContext<ISelectContext | null>(null)
