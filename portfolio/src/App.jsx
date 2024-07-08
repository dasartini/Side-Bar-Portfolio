
import './App.css'
import Sidebar from '../components/Sidebar'
import { Routes, Route } from 'react-router-dom'
import Biography from '../components/Biography'
import NCTimes from '../components/NCTimes'
import Gifs from '../components/Gifs'
import Swipper from '../components/Swipper'
import Experience from '../components/Experience'
import Hobbies from '../components/Hobbies'
import Contact from '../components/Contact'
import ErrorPage from '../components/ErrorPage'

function App() {

  return (
    <div>
      <Sidebar />
      <Routes>
      <Route path={'/'} element={<Biography />} />
        <Route path={'/biography'} element={<Biography />} />
        <Route path={'/experience'} element={<Experience/>}/>
        <Route path={'/gifs'} element={<Gifs />} />
        <Route path={'/gigtastic'} element={<Swipper />} />
        <Route path={'/nctimes'} element={<NCTimes />} />
        <Route path={'/hobbies'} element={<Hobbies/>}/>
        <Route path={'/contact'} element={<Contact/>}/>
        <Route path="*" element={<ErrorPage/>} />

       
      </Routes>
    </div>
  )
}

export default App
