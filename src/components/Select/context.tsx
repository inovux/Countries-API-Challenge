import { createContext } from 'react'
import { IOption } from './Option'

interface ISelectContext {
    value: IOption
}

// Add correct types for SelectContext
export const SelectContext = createContext<ISelectContext | null>(null)
