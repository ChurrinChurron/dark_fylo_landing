import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import bgCurvyDesktop from "./assets/bg-curvy-desktop.svg"
import bgCurvyMobile from "./assets/bg-curvy-mobile.svg"

function App() {

  return (
    <div className="relative overflow-hidden bg-[var(--color-primary-900)] text-white min-h-screen">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10">
        <img src={bgCurvyMobile} alt="" aria-hidden="true" className="w-full lg:hidden" />
        <img src={bgCurvyDesktop} alt="" aria-hidden="true" className="hidden w-full lg:block" />
      </div>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App