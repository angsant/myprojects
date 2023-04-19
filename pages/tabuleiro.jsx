import styles from "../pages/css/estiloTabuleiro.module.css"
import Quadrado from "@/components/Quadrado"

function gerarMatriz() {
  const result = []
  let corDoQuadrado = true
  let cont = 0

  for (let i = 0; i < 64; i++) {
    if (cont === 7) {
      result.push(<Quadrado flag={corDoQuadrado} />)
      cont = 0
    } else {
      result.push(<Quadrado flag={corDoQuadrado} />)
      corDoQuadrado = !corDoQuadrado
      cont++
    }
  }

  return result
}

export default function tabuleiro() {
  return (
    <div className={styles.fundo}>
      <div className={styles.posicao}>
        <div className={styles.grade}>
          {gerarMatriz()}
        </div>
      </div>
    </div>
  )
}