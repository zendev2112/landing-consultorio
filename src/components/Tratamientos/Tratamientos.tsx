import { FunctionComponent } from 'react'
import styles from './Tratamientos.module.css'
import TratamientosCard from './TratamientosCard'
import Luz from '../Luz/Luz'

const cards = [
  {
    title: (
      <>
        Rehabilitación oral
        <br />e implantes dentales
      </>
    ),
    description: (
      <>
        Recuperamos la salud, la función y la estética de tu sonrisa con{' '}
        <b>implantes</b> y <b>prótesis</b> de última generación.
      </>
    ),
    icon: '/icono-rehabilitacion.svg',
  },
  {
    title: (
      <>
        Ortodoncia <br /> y Ortopedia
      </>
    ),
    description: (
      <>
        Alineamos tu sonrisa con <b>brackets</b> convencionales y{' '}
        <b>alineadores</b> invisibles para niños y adultos.
      </>
    ),
    icon: '/icono-ortodoncia.svg',
  },
  {
    title: <>Estética Dental y Diseño de Sonrisa</>,
    description: (
      <>
        Rediseñamos tu expresión con <b>carillas personalizadas</b> y{' '}
        <b>planificación digital.</b>
      </>
    ),
    icon: '/icono-estetica.svg',
  },
  {
    title: <>ATM, Bruxismo y alivio del dolor</>,
    description: (
      <>
        Tratamos el <b>dolor mandibular</b> y el <b>desgaste dental</b>{' '}
        mejorando tu calidad de vida y protegiendo tus rehabilitaciones.
      </>
    ),
    icon: '/icono-atm.svg',
  },
  {
    title: <>Odontología general y Cirugía</>,
    description: (
      <>
        Atención integral para <b>toda la familia</b>, desde{' '}
        <b>limpiezas profundas</b> hasta <b>procedimientos quirúrgicos.</b>
      </>
    ),
    icon: '/icono-muela-entera.svg',
  },
  {
    title: (
      <>
        Blanquemiento <br /> dental
      </>
    ),
    description: (
      <>
        Iluminamos tu sonrisa con sistemas de <b>blanqueamiento profesional</b>{' '}
        para recuperar el <b>blanco natural</b> y la{' '}
        <b>vitalidad de tus dientes</b>.
      </>
    ),
    icon: '/icono-blanqueamiento.svg',
  },
]

const Tratamientos: FunctionComponent = () => {
  return (
    <section className={styles.tratamientos} id="tratamientos">
      <div className={styles.tratamientosInner}>
        <div className={styles.topRow}>
          <div className={styles.textCol}>
            <div className={styles.heading}>
              <h2 className={styles.title}>Tratamientos</h2>
            </div>
            <p className={styles.subtitle}>
              Ofrecemos soluciones integrales y duraderas que protegen la salud
              y la estética bucal.
            </p>
          </div>
          <div className={styles.luzCol}>
            <Luz variant="desktop" />
          </div>
        </div>
        <div className={styles.grid}>
          {cards.map((card, i) => (
            <TratamientosCard
              key={i}
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tratamientos
