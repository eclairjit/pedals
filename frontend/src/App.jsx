import { useState } from 'react'
import {Navbar, Footer} from './components'
import Home from "./pages/Home/Home"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Footer />
    </>
  )
}

export default App
