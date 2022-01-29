import styles from './Header.module.css'

export const Header = () => {
    return (
        <header className={styles.container}>
            <h1>Where in the world?</h1>
            <div>Theme switcher</div>
        </header>
    )
}
