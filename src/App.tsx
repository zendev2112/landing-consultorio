import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Tratamientos from './components/Tratamientos/Tratamientos'
import Fotona from './components/Fotona/Fotona'
import Diagnostico from './components/Diagnostico/Diagnostico'
import Resultados from './components/Resultados/Resultados'
import Minutos from './components/Minutos/Minutos'
import NuestroCentro from './components/NuestroCentro/NuestroCentro'
import Profesionales from './components/Profesionales/Profesionales'
import Opiniones from './components/Opiniones/Opiniones'
import FAQ from './components/FAQ/FAQ'
import Footer from './components/Footer/Footer'
import Luz from './components/Luz/Luz'

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Tratamientos />
        <Fotona />
        <Diagnostico />
        <Resultados />
        <Minutos />
        <NuestroCentro />
        <Profesionales />
        <Opiniones />
        <FAQ />
      </main>
      <Footer />
      <Luz variant="desktop" />
    </div>
  )
}

export default App
