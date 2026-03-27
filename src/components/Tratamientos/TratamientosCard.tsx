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
      <button className={styles.cardBtn}>AGENDÁ TU TURNO</button>
    </div>
  )
}

export default TratamientosCard
