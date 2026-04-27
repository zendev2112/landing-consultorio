import { useState, useEffect, useRef } from 'react'
import styles from './Header.module.css'
import { Portal } from './PortalPopup'
import MenuHamburguesaTablet from './MenuHamburguesaTablet'
import MenuHamburguesaMobile from './MenuHamburguesaMobile'

const NAV_LINKS = [
  { label: 'Equipo', href: '#profesionales' },
  { label: 'Nuestro centro', href: '#nuestro-centro' },
  { label: 'Tratamientos', href: '#tratamientos' },
  { label: 'Contacto', href: '#contacto' },
] as const

const Header: React.FC = () => {
  const [tabletOpen, setTabletOpen] = useState(false)
  const [tabletClosing, setTabletClosing] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileClosing, setMobileClosing] = useState(false)
  const hamburguerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mqTablet = window.matchMedia(
      '(min-width: 768px) and (max-width: 1023px)',
    )
    const mqMobile = window.matchMedia('(max-width: 767px)')

    const handleTablet = (e: MediaQueryListEvent) => {
      if (!e.matches) setTabletOpen(false)
    }
    const handleMobile = (e: MediaQueryListEvent) => {
      if (!e.matches) setMobileOpen(false)
    }
    mqTablet.addEventListener('change', handleTablet)
    mqMobile.addEventListener('change', handleMobile)
    return () => {
      mqTablet.removeEventListener('change', handleTablet)
      mqMobile.removeEventListener('change', handleMobile)
    }
  }, [])

  const handleCloseDrawer = () => {
    setTabletClosing(true)
    setTimeout(() => {
      setTabletOpen(false)
      setTabletClosing(false)
    }, 350)
  }

  const handleCloseMobileDrawer = () => {
    setMobileClosing(true)
    setTimeout(() => {
      setMobileOpen(false)
      setMobileClosing(false)
    }, 350)
  }

  const handleHamburger = () => {
    if (window.matchMedia('(max-width: 767px)').matches) {
      setMobileOpen((prev) => !prev)
    } else {
      setTabletOpen((prev) => !prev)
    }
  }

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navBar}>
          {/* Logo */}
          <a
            href="#inicio"
            className={styles.logoLink}
            aria-label="Zenón Ponce Odontología"
          >
            <img
              className={styles.logo}
              src="https://res.cloudinary.com/dptdloagw/image/upload/v1777322694/icono-marca_kd9zcs.svg"
              alt="Zenón Ponce Odontología"
              width={198}
              height={44}
            />
          </a>

          {/* Desktop nav */}
          <ul className={styles.menu}>
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className={styles.menuItem}>
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA button (hidden on mobile) + Hamburger (tablet + mobile) — grouped */}
          <div className={styles.btnHamb}>
            <a
              href="https://wa.me/5492926476050?text=Hola,%20vengo%20de%20la%20web.%20Quiero%20sacar%20un%20turno"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btnAgenda} ${styles.btnAgendaDesktop}`}
            >
              <b>AGENDÁ TU TURNO</b>
            </a>

            <div ref={hamburguerRef} className={styles.hamburguerContainer}>
              <button
                className={styles.hamburger}
                aria-label={
                  tabletOpen || mobileOpen ? 'Cerrar menú' : 'Abrir menú'
                }
                aria-expanded={tabletOpen || mobileOpen}
                onClick={handleHamburger}
              >
                <img
                  src="/hamburguesa.svg"
                  alt=""
                  className={styles.hamburguerIcon}
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile menu: fixed panel below header, from right to middle of logo icon */}
      {(mobileOpen || mobileClosing) && (
        <Portal>
          <div
            className={`${styles.drawerBackdrop} ${mobileClosing ? styles.backdropFadeOut : ''}`}
            onClick={handleCloseMobileDrawer}
          />
          <div
            className={`${styles.mobileDrawerPanel} ${mobileClosing ? styles.slideToRight : ''}`}
          >
            <MenuHamburguesaMobile onClose={handleCloseMobileDrawer} />
          </div>
        </Portal>
      )}

      {/* Tablet drawer: backdrop + slide-from-right panel */}
      {(tabletOpen || tabletClosing) && (
        <Portal>
          <div
            className={`${styles.drawerBackdrop} ${tabletClosing ? styles.backdropFadeOut : ''}`}
            onClick={() => handleCloseDrawer()}
          />
          <div
            className={`${styles.drawerPanel} ${tabletClosing ? styles.slideToRight : ''}`}
          >
            <MenuHamburguesaTablet onClose={handleCloseDrawer} />
          </div>
        </Portal>
      )}
    </>
  )
}

export default Header
