import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App'
import './main.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<App />} />
    </Routes>
  </BrowserRouter>,
)
