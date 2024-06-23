
import './App.css'
import Sidebar from '../components/Sidebar'
import { Routes, Route } from 'react-router-dom'
import Biograhy from '../components/Skills'
function App() {

  return (
    <div>
            <Sidebar/>
      <Routes>


  <Route path='/Biography' element={<Biograhy/>}/>
    </Routes>
    </div> 
  )
}

export default App
