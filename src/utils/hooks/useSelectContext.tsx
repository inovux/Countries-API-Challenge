import { useContext } from 'react'
import { SelectContext } from '../../components/Select/context'

export const useSelectContext = () => {
    const context = useContext(SelectContext)

    if (!context) {
        throw new Error(
            'Select compound components cannot be rendered outside the Select component'
        )
    }

    return context
}
