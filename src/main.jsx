import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { TokenContext } from './Context/context.jsx'
import Logo from "../src/assets/Logos/twitter.svg"
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <TokenContext>
        <div className='app_wrapper'>
          <App />
        </div>
        <div className='message_wrapper'>
            <div className='fixed inset-0   justify-center top-56 items-center w-full z-0'>
                 <img className="logo_animated mx-auto" src={Logo} alt="Logo" width={300} height={300}/>
              </div>
           <h1 className='text-[20px] font-bold text-white text-center z-50'>Ekraningiz sigimi 1110px-dan kichik!</h1>
        </div>
    </TokenContext>
  </BrowserRouter>
)
