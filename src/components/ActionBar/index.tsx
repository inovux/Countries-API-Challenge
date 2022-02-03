import { FC } from 'react'
import { Select } from '../Select'
import { Option } from '../Select/Option'
import styles from './ActionBar.module.css'

interface IActionBar {}

export const ActionBar: FC<IActionBar> = () => {
    return (
        <div className={styles.container}>
            <div>SEARCH</div>
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
