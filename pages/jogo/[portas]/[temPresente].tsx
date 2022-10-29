/* eslint-disable react-hooks/rules-of-hooks */
import styles from "../../../styles/Jogo.module.css";
import { useEffect, useState } from "react";
import Porta from "../../../components/Porta";
import { AtualizarPortas, CriarPortas } from "../../../functions/portas";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Jogo() {
    const router = useRouter();
    const [valido, setValido] = useState(false);
    const [portas, setPortas] = useState([]);

    useEffect(() => {
      const portas = +router.query.portas;
      const temPresente = +router.query.temPresente;
      
      const qtdePortasValidas =  portas >=3 && portas <= 100;
      const temPresenteValido = temPresente >= 1 && temPresente <= portas;
      
      setValido(qtdePortasValidas && temPresenteValido)
    }, [portas, router.query.portas, router.query.temPresente])

    useEffect(() => {
      const portas = +router.query.portas;
      const temPresente = +router.query.temPresente;
      setPortas(CriarPortas(portas, temPresente));
    }, [router?.query])

    function renderizarPortas(): JSX.Element[] {
      return valido && portas.map(porta => {
        return <Porta key={porta.getNumero} value={porta} 
        onChange={novaPorta => {
          setPortas(AtualizarPortas(portas, novaPorta));
        }}/>
      })
    }
  
    return (
      <div id={styles.jogo}>
       <div className={styles.portas}>
       { valido ?
       renderizarPortas() : 
       <h2>Valores inválidos</h2> 
       }
       </div>

       <div className={styles.botoes}>
        <Link href="/" passHref>
            <button>Reiniciar Jogo</button>
        </Link>
       </div>
      </div>
    )
}
