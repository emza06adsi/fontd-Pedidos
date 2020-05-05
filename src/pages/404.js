import React from 'react'
import './css/E404.css'
import {BrowserRouter} from 'react-router-dom'
// import Aside from '../components/aside'
// import Header from '../components/header'

class E404 extends React.Component {

    render() {
        return(
            <BrowserRouter>
        <div className="DIVERROR">
            <h1>404</h1>
            
            <p>pagina no encontrada</p>
            
          
            <a href="http://localhost:3000/pendientes">
                <button>
                    volver
                </button>
            </a>
              
        
        </div>

       </BrowserRouter>
        )
        
    }

}

export default E404;