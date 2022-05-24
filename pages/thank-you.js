import Header from "../components/Header";
import styles from '../styles/Home.module.css'

const ThankYou = () => {
    return (
        <div className={styles.container}>
            <Header/>
            <div className="pt-[10rem] text-center">
                <h1>Thank you</h1>
                <h1>Transmission Queue is empty</h1>
            </div>
        </div>
    )
}

export default ThankYou;