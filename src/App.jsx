import './App.css'
import Home from './components/Home'
import About from './components/About'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about/:id" element={<About />} />
    </Routes>
  )
}

export default App
