import { Route, Routes } from 'react-router-dom'

import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Home from './components/Home'
import Layout from './components/Layout'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Soundbar from './components/Soundbar'
import './App.scss'

function App() {
  return (
    <>
      <Soundbar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="experience" element={<Experience />} />
          <Route path="projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
