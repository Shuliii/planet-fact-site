import styles from './OpenMenu.module.css'
import data from "../data.json";
import arrow from '../assets/icon-chevron.svg'

const OpenMenu = (props) => {
    const clickHandler = (e) => {
        props.onClick(e.target.textContent)
    }
    const liHelper = data.map(item => (<li key={Math.random()} className={`${styles.li} ${styles[item.name]}`} onClick={clickHandler}>
        {item.name}
        <img src={arrow} alt=""/></li>))
    return <main>
        <ul className={styles.ul}>
           { liHelper }
        </ul>
    </main>
}

export default OpenMenu