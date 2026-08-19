import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dissertation from './pages/Dissertation'
import Editing from './pages/Editing'
import TermsConditions from './pages/TermsConditions'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/dissertation" element={<Dissertation />} />
        <Route path="/editing" element={<Editing />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
