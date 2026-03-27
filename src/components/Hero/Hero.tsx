import styles from './Hero.module.css'

const Hero: React.FC = () => {
  return (
    <section className={styles.hero} id="inicio">
      <div className={`container ${styles.hero__inner}`}>
        <h1 className={styles.hero__title}>Bienvenido</h1>
        <p className={styles.hero__subtitle}>
          Placeholder para el contenido del hero.
        </p>
      </div>
    </section>
  )
}

export default Hero
