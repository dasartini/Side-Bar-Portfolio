import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import VisibleProvider from '../contexts/Visible.jsx'
import ThemeProvider from '../contexts/Theme.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
<ThemeProvider>
< VisibleProvider>
<BrowserRouter>
    <App />
    </BrowserRouter>
    </VisibleProvider>
    </ThemeProvider>
)
