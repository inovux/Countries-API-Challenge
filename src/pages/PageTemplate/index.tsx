import { FC } from 'react'

export const PageTemplate: FC = ({ children }) => {
    return (
        <div>
            <div>HEADER</div>
            {children}
        </div>
    )
}
