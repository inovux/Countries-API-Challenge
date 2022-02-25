import { FC } from 'react'
import { Select } from '../Select'
import { IOption, Option } from '../Select/Option'
import styles from './ActionBar.module.css'
import { Search } from '../Search'

interface IActionBar {
    onSearch: (value: string) => void
    onSelectRegion: (option: IOption) => void
    searchValue?: string
    regionValue?: string
}

export const ActionBar: FC<IActionBar> = ({
    onSearch,
    onSelectRegion,
    searchValue = '',
    regionValue = undefined,
}) => {
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
                    value={searchValue}
                />
            </div>
            <div className={styles.selectContainer}>
                <Select
                    placeholder="Filter by Region"
                    onSelect={handleSelectRegion}
                    storeValue={regionValue}
                >
                    <Option value="africa" label="Africa" />
                    <Option value="america" label="America" />
                    <Option value="asia" label="Asia" />
                    <Option value="europe" label="Europe" />
                    <Option value="oceania" label="Oceania" />
                </Select>
            </div>
        </div>
    )
}
