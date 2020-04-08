import React from 'react'
import './css/principal.css'
import Modalpedidos from '../components/modalpedidos.js'
// import Aside from '../components/aside'
// import Header from '../components/header'
class Master extends React.Component {

    constructor(props){
        super(props)
    }


    render() {
        return (
            <React.Fragment>
                <section className="container">
                    <div className="modal-vista" tabindex="-1" role="dialog">

                        <table id="customers">
                            <tr>
                                <th className="sticky">numero del pedido</th>
                                <th className="sticky">numero de usuario</th>
                                <th className="sticky">nombre del usuario</th>
                                <th className="sticky">direccion del pedido</th>
                                <th className="sticky">ver pedido</th>
                                <th className="sticky">buscar en el mapa</th>
                            </tr>
                            <Modalpedidos
                                numeroPedido={23}
                                idUsuario={1023955260}
                                nombreUsuario={"esteban"}
                                direccionPedido={"xxx"}
                                data={"data"}
                                mapa={""} />

                        </table>



                    </div>

                </section>



            </React.Fragment>


        )
    }

}

export default Master;