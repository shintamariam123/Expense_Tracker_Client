import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';
import ContextAPI from './contexts/ContextAPI.jsx'
import TokenAuth from './contexts/TokenAuth.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextAPI>
      <TokenAuth>
    <BrowserRouter>
    <GoogleOAuthProvider clientId="495544760876-rcmhttalfv7maf8hr32skaantlp84f8k.apps.googleusercontent.com">
    <App />
    </GoogleOAuthProvider>
    </BrowserRouter>
    </TokenAuth>
    </ContextAPI> 
  </React.StrictMode>,
)
