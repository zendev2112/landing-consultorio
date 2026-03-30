import { FunctionComponent } from 'react'
import styles from './Fotona.module.css'

const Fotona: FunctionComponent = () => {
  return (
    <section className={styles.fotona} id="fotona">
      <div className={styles.fotonaInner}>
        <div className={styles.columnaIcono}>
          <img
            className={styles.iconoFotona}
            src="/icono-fotona.svg"
            alt="Icono Láser Fotona"
          />
          <div className={styles.txtFotona}>
            <b className={styles.laserFotona}>Láser Fotona®</b>
            <b className={styles.bastaDeMiedo}>¡Basta de miedo al torno!</b>
          </div>
        </div>
        <div className={styles.columnaTxt}>
          <div className={styles.laTecnologiaLaser}>
            La tecnología láser utiliza luz, por lo que no genera ruidos agudos,
            vibraciones ni dolor.
          </div>
          <div className={styles.casiSinAnestesia}>
            • Casi sin anestesia
            <br />• Recuperación más rápida
          </div>
        </div>
      </div>
    </section>
  )
}

export default Fotona
