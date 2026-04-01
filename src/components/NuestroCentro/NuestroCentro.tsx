import React from 'react'
import styles from './NuestroCentro.module.css'

const NuestroCentro: React.FC = () => {
  return (
    <section className={styles.seccionNuestroCentro} id="nuestro-centro">
      <div className={styles.inner}>
        <div className={styles.clipPathFrame}>
          <div className={styles.rectangle} />
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
          <button className={styles.btnAgenda}>
            <b className={styles.agendTuTurno}>AGENDÁ TU TURNO</b>
          </button>
        </div>
      </div>
    </section>
  )
}

export default NuestroCentro
