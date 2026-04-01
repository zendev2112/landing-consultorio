import React from 'react'
import styles from './Profesionales.module.css'

const Profesionales: React.FC = () => {
  return (
    <section className={styles.profesionales} id="profesionales">
      <div className={styles.inner}>
        <div className={styles.header}>
          <b className={styles.equipo}>Equipo</b>
          <div className={styles.nosPresentamos}>Nos presentamos.</div>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img className={styles.foto} alt="Zenón Ponce" />
            <div className={styles.titulo}>
              <b className={styles.zennPonce}>Zenón Ponce</b>
              <div className={styles.tituloMatricula}>
                <div className={`${styles.dirClnicoZenn} ${styles.dirNowrap}`}>
                  Dir. Clínico Zenón Ponce Odontología
                </div>
                <div className={styles.dirClnicoZenn}>Odontólogo UNLP</div>
                <div className={styles.dirClnicoZenn}>M.P. 0922</div>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <img className={styles.foto} alt="Luis Borel" />
            <div className={styles.titulo}>
              <b className={styles.zennPonce}>Luis Borel</b>
              <div className={styles.tituloMatricula}>
                <div className={styles.dirClnicoZenn}>Odontólogo UBA</div>
                <div className={styles.dirClnicoZenn}>MP 51364</div>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <img className={styles.foto} alt="Juliana Schwab" />
            <div className={styles.titulo}>
              <b className={styles.zennPonce}>Juliana Schwab</b>
              <div className={styles.tituloMatricula}>
                <div className={styles.dirClnicoZenn}>
                  Odontóloga UBA especialista en ortodoncia y ortopedia maxilar
                </div>
                <div className={styles.dirClnicoZenn}>MP: 101127</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profesionales
