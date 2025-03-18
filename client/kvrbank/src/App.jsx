
import './App.css'
import Analytics from './components/Analytics'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Newsletter from './components/Newsletter'
import Signin from './components/Signin'
import User from './components/User'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Login />
      <Analytics />
      <Newsletter />
      <Cards />
      <Signin />
      <Footer />

      {/* <User />
      <Footer /> */}
    </>
  )
}

export default App
