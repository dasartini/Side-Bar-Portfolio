
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
import Hippo from '../components/Hippo'
import ThemeSwitch from '../components/ThemeSwitch'
import { useContext } from 'react'
import { ThemeContext } from '../contexts/Theme'


function App() {
const {theme} =useContext(ThemeContext)
  return (
    <div>
      
<div className={theme}>
      <Sidebar />
      <ThemeSwitch/>
      <Routes>
      <Route path={'/'} element={<Biography />} />
        <Route path={'/biography'} element={<Biography />} />
        <Route path={'/experience'} element={<Experience/>}/>
        <Route path={'/gifs'} element={<Gifs />} />
        <Route path={'/gigtastic'} element={<Swipper />} />
        <Route path={'/nctimes'} element={<NCTimes />} />
        <Route path={'/hobbies'} element={<Hobbies/>}/>#
        <Route path={'/hippo-cat-on-sol'} element={<Hippo/>}/>
        <Route path={'/contact'} element={<Contact/>}/>
        <Route path="*" element={<ErrorPage/>} />
        
       
      </Routes>
      </div>
    </div>
  )
}

export default App
