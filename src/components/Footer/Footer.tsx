import styles from './Footer.module.css'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footer__inner}`}>
        <p>&copy; 2026 Consultorio. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
