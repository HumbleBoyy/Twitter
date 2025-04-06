import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { TokenContext } from './Context/context.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <TokenContext>
        <div className='app_wrapper'>
          <App />
        </div>
    </TokenContext>
  </BrowserRouter>
)
