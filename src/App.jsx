import './App.css'
import Home from './components/Home'
import About from './components/About'
import { Route, Routes ,Link, useLocation } from 'react-router-dom'
import Create from './components/Create';

function App() {
  const{search , pathname}  = useLocation();
  console.log(search,pathname);
  
  return (
    <div className='h-screen w-screen relative'>
      {
      ((pathname !="/" || search.length > 0 ) && ( <Link to='/' className='absolute top-[2%] left-[17%]  text-red-400 px-4 py-1  '>Home</Link>))
}

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about/:id" element={<About />} />
      <Route path="/create/" element={<Create />} />

    </Routes>
    </div>

  )
}

export default App
