import { FC } from 'react'

export const Hello: FC<{ text: string }> = ({ text }) => {
    return <div>{text}</div>
}
