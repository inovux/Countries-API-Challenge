import { createContext } from 'react'
import { IOption } from './Option'

interface ISelectContext {
    value: IOption | null
}

export const SelectContext = createContext<ISelectContext | null>(null)
