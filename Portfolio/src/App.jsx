import { useState } from 'react'
import Navbar from './Assests/Navbar'
import Home from './Assests/Home'
import About from './Assests/About'
import Services from './Assests/Services'
import Projects from './Assests/Projects'
import Skills from './Assests/Skills'

import Contact from './Assests/Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
     <div>
      <Navbar/>
     <Home/>
     <About/>
     <Services/>
     <Projects/>
     <Skills/>
     <Contact/>
     
     </div>
     
  )
}

export default App
