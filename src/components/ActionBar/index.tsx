import { FC } from 'react'
import { Select } from '../Select'
import { Option } from '../Select/Option'
import styles from './ActionBar.module.css'
import { Search } from '../Search'

interface IActionBar {}

export const ActionBar: FC<IActionBar> = () => {
    return (
        <div className={styles.container}>
            <Search placeholder="Search for a country..." />
            <Select
                placeholder="Filter by Region"
                onSelect={() => {
                    console.log('selection')
                }}
            >
                <Option value="africa" label="Africa" />
                <Option value="america" label="America" />
                <Option value="asia" label="Asia" />
                <Option value="europe" label="Europe" />
                <Option value="oceania" label="Oceania" />
            </Select>
        </div>
    )
}
