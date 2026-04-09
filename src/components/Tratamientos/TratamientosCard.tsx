import { ReactNode } from 'react'
import styles from './TratamientosCard.module.css'

interface TratamientosCardProps {
  title: ReactNode
  description: ReactNode
  icon: string
}

const TratamientosCard = ({
  title,
  description,
  icon,
}: TratamientosCardProps) => {
  return (
    <div className={styles.card}>
      <img className={styles.icon} src={icon} alt="" aria-hidden="true" />
      <div className={styles.txt}>
        <b className={styles.title}>{title}</b>
        <p className={styles.description}>{description}</p>
      </div>
      <a
        href="https://wa.me/5492926476050?text=Hola,%20vengo%20de%20la%20web.%20Quiero%20sacar%20un%20turno"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.cardBtn}
      >
        AGENDÁ TU TURNO
      </a>
    </div>
  )
}

export default TratamientosCard
