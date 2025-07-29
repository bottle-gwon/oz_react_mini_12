import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import store from './RTK/store.js'
import { Provider } from 'react-redux'
import { SupabaseProvider } from './supabase/context/index.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <SupabaseProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </SupabaseProvider>
  </BrowserRouter>
    
)
