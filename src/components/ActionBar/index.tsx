import { FC } from 'react'
import { Select } from '../Select'
import { IOption, Option } from '../Select/Option'
import styles from './ActionBar.module.css'
import { Search } from '../Search'

interface IActionBar {
    onSearch: (value: string) => void
    onSelectRegion: (option: IOption) => void
}

export const ActionBar: FC<IActionBar> = ({ onSearch, onSelectRegion }) => {
    const handleSearch = (value: string) => {
        onSearch(value)
    }

    const handleSelectRegion = (option: IOption) => {
        onSelectRegion(option)
    }

    return (
        <div className={styles.container}>
            <div className={styles.searchContainer}>
                <Search
                    onChange={handleSearch}
                    placeholder="Search for a country..."
                />
            </div>
            <Select
                placeholder="Filter by Region"
                onSelect={handleSelectRegion}
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
