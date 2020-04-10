import React from 'react'
import './css/modalPedidos.css'
// import Aside from '../components/aside'
// import Header from '../components/header'
class TablaClientes extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <React.Fragment>

                {
                    // <h1>{"datos"}</h1>
                // <h1>{this.props.clientes.body}</h1>
                    this.props.clientes["body"][0].map((cliente) => {
                        return (

                            
                            <tr key={cliente.us_id}>
                                <td>{cliente.us_id}</td>
                                <td>{cliente.us_nombre}</td>
                                <td>{cliente.us_correo}</td>
                                <td>{cliente.us_direccion}</td>
                            </tr>
                        )
                    })
                }


            </React.Fragment>


        )
    }

}

export default TablaClientes;

//     <tr>
                            //     <td>{this.props.documento}</td>
                            //     <td>{this.props.nombre}</td>
                            //     <td>{this.props.correo}</td>
                            //     <td>{this.props.direccion}</td>

                            // </tr>













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
