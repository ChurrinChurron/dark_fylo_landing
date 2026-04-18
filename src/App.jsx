import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="relative overflow-hidden bg-[var(--color-primary-850)] text-white min-h-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App