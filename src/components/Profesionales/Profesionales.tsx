import styles from './Profesionales.module.css'

const Profesionales: React.FC = () => {
  return (
    <section className={styles.profesionales} id="profesionales">
      <div className={`container ${styles.profesionales__inner}`}>
        <h2 className={styles.profesionales__title}>Profesionales</h2>
        <p className={styles.profesionales__subtitle}>Placeholder</p>
      </div>
    </section>
  )
}

export default Profesionales
