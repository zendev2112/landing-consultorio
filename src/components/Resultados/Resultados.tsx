import {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import styles from './Resultados.module.css'

type Breakpoint = 'desktop' | 'tablet' | 'mobile'

const IMAGES = {
  desktop: {
    before:
      'https://res.cloudinary.com/dptdloagw/image/upload/c_fill,w_1376,h_768,g_auto/v1776426758/Screenshot_from_2026-04-17_08-51-19_n3aqhs.png',
    after:
      'https://res.cloudinary.com/dptdloagw/image/upload/v1774899468/despues-desktop_tgjty6.png',
  },
  tablet: {
    before:
      'https://res.cloudinary.com/dptdloagw/image/upload/v1774899467/antes-tablet_n12ujo.png',
    after:
      'https://res.cloudinary.com/dptdloagw/image/upload/v1774899467/despues-tablet_yf044q.png',
  },
  mobile: {
    before:
      'https://res.cloudinary.com/dptdloagw/image/upload/v1775494664/Rectangle_hxa1fi.png',
    after:
      'https://res.cloudinary.com/dptdloagw/image/upload/v1775494663/Rectangle_1_hadxdm.png',
  },
}

const getBreakpoint = (): Breakpoint => {
  if (typeof window === 'undefined') return 'desktop'
  if (window.innerWidth < 768) return 'mobile'
  if (window.innerWidth < 1024) return 'tablet'
  return 'desktop'
}

const Resultados: FunctionComponent = () => {
  const [sliderPos, setSliderPos] = useState(50)
  const [bp, setBp] = useState<Breakpoint>('desktop')
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  useEffect(() => {
    const update = () => setBp(getBreakpoint())
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const calcPos = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const pos = Math.min(
      100,
      Math.max(0, ((clientX - rect.left) / rect.width) * 100),
    )
    setSliderPos(pos)
  }, [])

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true
    calcPos(e.clientX)
  }
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return
    calcPos(e.clientX)
  }
  const stopDrag = () => {
    isDragging.current = false
  }
  const onTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true
    calcPos(e.touches[0].clientX)
  }
  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return
    calcPos(e.touches[0].clientX)
  }

  const { before, after } = IMAGES[bp]

  return (
    <section className={styles.resultados} id="resultados">
      <div className={styles.seccionResultados}>
        <div className={styles.antesYDespues}>
          <b className={styles.antesYDespus}>Antes y después</b>
          <div className={styles.resultadosRealesBeneficios}>
            Resultados reales, beneficios notables.
          </div>
        </div>
        <div
          ref={containerRef}
          className={styles.sliderContainer}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={stopDrag}
        >
          <img
            className={styles.imgBefore}
            src={after}
            alt="Después"
            draggable={false}
          />
          <img
            className={styles.imgAfter}
            src={before}
            alt="Antes"
            draggable={false}
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          />
          <div className={styles.divider} style={{ left: `${sliderPos}%` }} />
          <div className={styles.handle} style={{ left: `${sliderPos}%` }}>
            <img
              src="/left-arrow.svg"
              className={styles.arrowLeft}
              alt=""
              draggable={false}
            />
            <img
              src="/circle.svg"
              className={styles.circleIcon}
              alt=""
              draggable={false}
            />
            <img
              src="/right-arrow.svg"
              className={styles.arrowRight}
              alt=""
              draggable={false}
            />
          </div>
        </div>
        <div className={styles.mobileImages}>
          <img
            className={styles.mobileImg}
            src={before}
            alt="Antes"
            draggable={false}
          />
          <img
            className={styles.mobileImg}
            src={after}
            alt="Después"
            draggable={false}
          />
        </div>
      </div>
    </section>
  )
}

export default Resultados
