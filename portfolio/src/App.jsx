
import './App.css'
import Sidebar from '../components/Sidebar'
import { Routes, Route } from 'react-router-dom'
import Biograhy from '../components/Skills'
import NCTimes from '../components/NCTimes'
import Home from '../components/Home'
function App() {

  return (
    <div>
      <Sidebar />
      <Routes>

        <Route path={'/'} element={<Home />} />
        <Route path='/Biography' element={<Biograhy />} />
        <Route path='/NCTimes' element={<NCTimes />} />
      </Routes>
    </div>
  )
}

export default App
