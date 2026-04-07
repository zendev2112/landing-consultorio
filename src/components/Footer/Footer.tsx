import React from 'react'
import styles from './Footer.module.css'

const Footer: React.FC = () => {
  return (
    <footer className={styles.seccionFooter} id="contacto">
      <div className={styles.inner}>
        <div className={styles.footerColumns}>
          {/* Logo + accepted payments */}
          <div className={styles.logoAceptamos}>
            <img
              className={styles.logoIcon}
              src="/logo-claro.svg"
              alt="Zenón Ponce Odontología"
            />
            <b className={`${styles.aceptamosTodos} ${styles.desktopOnly}`}>
              <span className={styles.aceptamosTodos2}>ACEPTAMOS TODOS </span>
              <span className={styles.losMediosDe}>LOS MEDIOS DE PAGO.</span>
            </b>
          </div>

          {/* Address + map */}
          <div className={styles.ubicacion}>
            <b className={styles.visitanosEnNuestro}>
              VISITANOS EN NUESTRO CONSULTORIO:
            </b>
            <div className={styles.addressText}>
              Villegas 175, Coronel Suárez, Bs. As.
            </div>
            <iframe
              className={styles.mapImg}
              src="https://maps.google.com/maps?q=Villegas+175,+Coronel+Su%C3%A1rez,+Buenos+Aires,+Argentina&t=&z=15&ie=UTF8&iwloc=&output=embed"
              title="Mapa consultorio Zenón Ponce Odontología"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            />
          </div>

          {/* Social + contact + CTA */}
          <div className={styles.footerRight}>
            <div className={styles.redesSociales}>
              <b className={styles.sectionLabel}>REDES SOCIALES</b>
              <img
                className={styles.redesSocialesIcon}
                src="/redes-sociales.svg"
                alt="Instagram y Facebook"
              />
            </div>
            <div className={styles.contacto}>
              <b className={styles.sectionLabel}>CONTACTO</b>
              <div className={styles.whatsapp}>
                <img
                  className={styles.iconoWa}
                  src="/icono-wa.svg"
                  alt="WhatsApp"
                />
                <span className={styles.phone}>2926 47 6050</span>
              </div>
            </div>
            <a
              href="https://wa.me/5492926476050"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnContactanos}
            >
              <b className={styles.btnLabel}>CONTACTANOS</b>
            </a>
          </div>
        </div>

        {/* Copyright strip */}
        <b className={`${styles.aceptamosTodos} ${styles.mobileTabletOnly}`}>
          <span className={styles.aceptamosTodos2}>ACEPTAMOS TODOS </span>
          <span className={styles.losMediosDe}>LOS MEDIOS DE PAGO.</span>
        </b>
        <div className={styles.copyright}>
          <div className={styles.copyrightDivider} />
          <p className={styles.copyrightText}>
            Copyright &copy; 2026 Zenón Ponce Odontología | Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
