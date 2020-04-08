import React from 'react'
import './css/principal.css'

import TablaProductos from '../components/tablaDeProductos'
// import Header from '../components/header'

class Productos extends React.Component {

    render() {
        return (
            <React.Fragment>
                <section className="container">
                    <div className="modal-vista" tabindex="-1" role="dialog">

                        <table id="customers">
                            <tr>
                                <th className="sticky">documento del producto</th>
                                <th className="sticky">nombre del producto</th>
                                <th className="sticky">cantidad del producto</th>
                                <th className="sticky">imagen del producto</th>

                            </tr>
                            <TablaProductos
                            documento={24}
                            nombre={"cableutp"}
                            cantidad={"25"}
                            imagen={"img"}
                            />

                        </table>



                    </div>

                </section>



            </React.Fragment>



        )
    }

}

export default Productos;