import React from 'react'
import './css/modalPedidos.css'
// import Aside from '../components/aside'
// import Header from '../components/header'
class Modalpedidos extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <React.Fragment>
                {/* <h1>{ this.props.pedidos}</h1> */}
                {
                    this.props.pedidos.map((pedido) => {
                        return (
                            <tr key={pedido.pedido.ped_id}>
                                <td>{pedido.ped_id}</td>
                                <td>{pedido.us_id}</td>
                                <td>{pedido.us_nombre}</td>
                                <td>{pedido.us_direccion}</td>
                                {/* <td>{pedido.data}</td>
                                <td>{pedido.mapa}</td> */}
                            </tr>
                        )
                    })
                }






            </React.Fragment>


        )
    }

}

export default Modalpedidos;














{/* <section className="container">
                    <div className="modal-vista" tabindex="-1" role="dialog">

                        <div className="" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Modal title</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <p>Modal body text goes here.</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </section> */}
