import { PortaProps } from "../model/PortaProps";
import Presente from "./Presente";
import styles from "../styles/Porta.module.css";

export default function Porta(props: PortaProps) {
  const porta = props.value;
  const selecionada = porta.getSelecionada && !porta.getAberta ? styles.selecionada : '';

  const alternarSelecao = (e) => props.onChange(porta.alternarSelecao());
  const abrir = (e) => {
    e.stopPropagation();
    props.onChange(porta.abrir());
  };

  function rederizarPorta() {
    return (
      <div className={styles.porta}>
        <div className={styles.numero}>{porta.getNumero}</div>
        <div className={styles.maceneta} 
          onClick={abrir}></div>
      </div>
    );
  }

  return (
    <div className={styles.area} onClick={alternarSelecao}>
      <div className={`${styles.estrutura} ${selecionada}`}>
        {porta.getFechada ? 
          rederizarPorta() : 
          porta.getTemPresente ? <Presente /> : false
          }
      </div>
      <div className={styles.chao}></div>
    </div>
  );
}
