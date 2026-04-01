import styles from './Minutos.module.css'

const Minutos: React.FC = () => {
  return (
    <section className={styles.minutos}>
      <div className={styles.inner}>
        <div className={styles.min}>
          <b className={styles.tens}>
            ¿Tenés{' '}
            <span className={styles.highlight30}>
              <img
                className={styles.vectorIcon}
                alt=""
                src="/vector-minutos.svg"
                aria-hidden="true"
              />
              30 minutos
            </span>
            ?
          </b>
          <div className={styles.esElTiempo}>
            Es el tiempo necesario para darte un paneo general de tu salud
            bucal.
          </div>
        </div>
        <div className={styles.incluye}>
          <div className={styles.incluye2}>Incluye:</div>
          <div className={styles.escaneoDigital}>
            • Escaneo digital
            <br />• Diagnóstico
            <br />• Plan de tratamiento
          </div>
          <button className={styles.btnAgenda}>
            <b className={styles.agendTuTurno}>AGENDÁ TU PRIMERA CONSULTA</b>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Minutos
