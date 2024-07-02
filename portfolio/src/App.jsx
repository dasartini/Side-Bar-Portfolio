
import './App.css'
import Sidebar from '../components/Sidebar'
import { Routes, Route } from 'react-router-dom'
import Biograhy from '../components/Skills'
import NCTimes from '../components/NCTimes'
import Home from '../components/Home'
import Gifs from '../components/Gifs'
import Swipper from '../components/Swipper'
function App() {

  return (
    <div>
      <Sidebar />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/biography'} element={<Biograhy />} />
        <Route path={'/gifs'} element={<Gifs />} />
        <Route path={'/gigtastic'} element={<Swipper />} />
        <Route path='/nctimes' element={<NCTimes />} />
      </Routes>
    </div>
  )
}

export default App
