import { FC } from 'react'

import styles from './Loader.module.css'

import EarthUrl from '../../assets/earth-gif-preloader.gif'

export const Loader: FC = () => {
    return (
        <div className={styles.container}>
            <img alt="rotating earth" src={EarthUrl} />
        </div>
    )
}
