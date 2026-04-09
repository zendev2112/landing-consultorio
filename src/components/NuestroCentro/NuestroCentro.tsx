import React from 'react'
import styles from './NuestroCentro.module.css'

const NuestroCentro: React.FC = () => {
  return (
    <section className={styles.seccionNuestroCentro} id="nuestro-centro">
      <div className={styles.inner}>
        <div className={styles.clipPathFrame}>
          <video
            className={styles.centroVideo}
            src="https://res.cloudinary.com/dptdloagw/video/upload/v1775480307/nuestro_centro_skaw76.mov"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
        <div className={styles.nuestroCentro}>
          <b className={styles.nuestroCentro2}>Nuestro centro</b>
          <div className={styles.enZennPonce}>
            En Zenón Ponce Odontología creemos que una buena atención empieza
            por diagnosticar con precisión. Combinamos experiencia clínica,
            planificación digital y una mirada integral en cada tratamiento.
          </div>
          <b className={styles.nuestroEnfoque}>Nuestro enfoque</b>
          <div className={styles.diagnsticoProfesionalCon}>
            • Diagnóstico profesional, con apoyo digital
            <br />• Tratamientos personalizados, no estandarizados
            <br />• Propuesta integral que resuelve todas las instancias del
            tratamiento en un mismo lugar
            <br />• Espacio de hospitalidad para los pacientes y sus
            acompañantes.
          </div>
          <a
            href="https://wa.me/5492926476050?text=Hola,%20vengo%20de%20la%20web.%20Quiero%20sacar%20un%20turno"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnAgenda}
          >
            <b className={styles.agendTuTurno}>AGENDÁ TU TURNO</b>
          </a>
        </div>
      </div>
    </section>
  )
}

export default NuestroCentro
