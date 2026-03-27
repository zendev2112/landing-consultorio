import { FunctionComponent } from 'react'
import styles from './MenuHamburguesaMobile.module.css'

export type MenuHamburguesaMobileType = {
  className?: string
  onClose?: () => void
}

const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Equipo', href: '#profesionales' },
  { label: 'Nuestro Centro', href: '#nuestro-centro' },
  { label: 'Tratamientos', href: '#tratamientos' },
  { label: 'Contacto', href: '#contacto' },
] as const

const MenuHamburguesaMobile: FunctionComponent<MenuHamburguesaMobileType> = ({
  className = '',
  onClose,
}) => {
  return (
    <div className={[styles.menuMobile, className].join(' ')}>
      {/* Top bar: logo + close button */}
      <div className={styles.navBar}>
        <img
          className={styles.iconoMarca}
          src="/icono-marca-reverse.svg"
          alt="Zenón Ponce Odontología"
        />
        <button
          className={styles.hamburguesa}
          onClick={onClose}
          aria-label="Cerrar menú"
        >
          <div className={styles.hamburguesa2}>
            <img
              className={styles.cruzIcon}
              src="/hamburguesa-reverse.svg"
              alt=""
              aria-hidden="true"
            />
          </div>
        </button>
      </div>

      {/* Nav links + CTA */}
      <div className={styles.menu}>
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className={styles.menuLink}
            onClick={onClose}
          >
            <b>{label}</b>
          </a>
        ))}
        <a href="#contacto" className={styles.btnAgenda} onClick={onClose}>
          <b className={styles.agendTuTurno}>AGENDÁ TU TURNO</b>
        </a>
      </div>
    </div>
  )
}

export default MenuHamburguesaMobile
