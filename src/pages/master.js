import React from 'react'
import './css/principal.css'
import Modalpedidos from '../components/modalpedidos.js'
// import Aside from '../components/aside'
// import Header from '../components/header'
class Master extends React.Component {

    render() {
        return (
            <React.Fragment>

                <Modalpedidos numeroPedido={23} idUsuario={1023955260}  nombreUsuario={"esteban"} />

            </React.Fragment>


        )
    }

}

export default Master;