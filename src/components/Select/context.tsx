import { createContext } from 'react'
import { IOption } from './Option'

interface ISelectContext {
    value: IOption | null
    onSelect: (option: IOption) => void
    width?: number
}

export const SelectContext = createContext<ISelectContext | null>(null)
