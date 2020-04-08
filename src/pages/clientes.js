import React from 'react'
import './css/principal.css'

import TablaCliente from '../components/tablaClientes'
// import Header from '../components/header'

class PedidosRealizados extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <React.Fragment>
                
                <section className="container">
                
                    <div className="modal-vista" tabindex="-1" role="dialog">

                        <table id="customers">
                            <tr>
                                <th className="sticky">documento del cliente</th>
                                <th className="sticky">nombre del cliente</th>
                                <th className="sticky">correo del cliente</th>
                                <th className="sticky">direccion del cliente</th>

                            </tr>
                            <TablaCliente
                                documento={1023955260}
                                nombre={"esteban"}
                                correo={"estebanmezs¡abetancur@gmail.com"}
                                direccion={"xxxxx"} />
                        </table>

                    </div>

                </section>



            </React.Fragment>

        )
    }

}

export default PedidosRealizados;