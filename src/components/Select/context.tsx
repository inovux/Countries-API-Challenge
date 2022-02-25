import { createContext } from 'react'
import { IOption } from './Option'

interface ISelectContext {
    value: IOption | null
    onSelect: (option: IOption) => void
    width?: string
}

export const SelectContext = createContext<ISelectContext | null>(null)
