
import { CartaoProps } from "../model/CartaoProps";
import styles from "../styles/Cartao.module.css";

export default function Cartao(props: CartaoProps) {
    return (
        <div className={styles.cartao} style={{
            backgroundColor: props.bgcolor ?? "#fff"
        }}>
            {props.children}
        </div>
    )
}