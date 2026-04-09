import { FunctionComponent } from 'react'
import styles from './Diagnostico.module.css'

const Diagnostico: FunctionComponent = () => {
  return (
    <section className={styles.diagnostico} id="diagnostico">
      {/* Banner verde claro */}
      <div className={styles.banner}>
        <div className={styles.bannerInner}>
          <div className={styles.bannerItem}>
            <img
              className={styles.iconoEstrella}
              src="/icono-estrella.svg"
              alt=""
            />
            <b className={styles.bannerText}>+ 25 AÑOS DE EXPERIENCIA</b>
          </div>
          <div className={styles.bannerItem}>
            <img
              className={styles.iconoSonriente}
              src="/icono-sonriente.svg"
              alt=""
            />
            <b className={styles.bannerTextLg}>+ 1000 SONRISAS FELICES</b>
          </div>
        </div>
      </div>

      {/* Contenido tecnología */}
      <div className={styles.contenido}>
        <div className={styles.contenidoInner}>
          <div className={styles.txtUnSoloLugar}>
            <b className={styles.titulo}>
              Un solo lugar, {''}
              <br />
              todas las respuestas
            </b>
            <p className={styles.descripcion}>
              Gracias al diagnóstico digital por imágenes, resolvemos los
              tratamientos de nuestros pacientes en un solo lugar, sin
              derivaciones ni demoras. Y todo en un espacio pensado para atender
              tu salud bucal con tecnología y calidez.
            </p>
            <a
              href="https://wa.me/5492926476050?text=Hola,%20vengo%20de%20la%20web.%20Quiero%20sacar%20un%20turno"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btnAgenda} ${styles.btnDesktop}`}
            >
              <b className={styles.btnLabel}>AGENDÁ TU TURNO</b>
            </a>
          </div>

          <div className={styles.estudios}>
            <div className={styles.estudioItem}>
              <img
                className={styles.iconoEstudio}
                src="/icono-tomografia.svg"
                alt=""
              />
              <span className={styles.estudioLabel}>Tomografía 3D</span>
            </div>
            <div className={styles.estudioItem}>
              <img className={styles.iconoEstudio} src="/icono-rx.svg" alt="" />
              <span className={styles.estudioLabel}>Radiología</span>
            </div>
            <div className={styles.estudioItem}>
              <img
                className={styles.iconoEstudio}
                src="/icono-escaner.svg"
                alt=""
              />
              <span className={styles.estudioLabel}>Escaneo intraoral</span>
            </div>
          </div>
          <a
            href="https://wa.me/5492926476050?text=Hola,%20vengo%20de%20la%20web.%20Quiero%20sacar%20un%20turno"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.btnAgenda} ${styles.btnMobileTablet}`}
          >
            <b className={styles.btnLabel}>AGENDÁ TU TURNO</b>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Diagnostico
