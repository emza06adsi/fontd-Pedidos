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
                <section className="container">
                    <div className="modal-vista" tabindex="-1" role="dialog">

                        <div className="" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <section className="modal-header_title">
                                        <h4 className="modal-title"><strong>numero de pedido:</strong></h4>
                                        <h4 className="modal-title">{this.props.numeroPedido}</h4>
                                    </section>
                                </div>
                                <div className="modal-body">
                                    <section className="modal-header_body">
                                        <h5 className=""><strong>Id usuario:</strong></h5>
                                        <h5 className="">{this.props.idUsuario}</h5>
                                    </section>
                                    <section className="modal-header_body">
                                        <h5 className=""><strong>nombre usuario:</strong></h5>
                                        <h5 className="">{this.props.nombreUsuario}</h5>
                                    </section>
                                    <button type="button" className="btn btn-primary">Ver pedido</button>
                                    
                                </div>
                                <div className="modal-footer">
                                    
                                    <button type="button" className="btn btn-primary">ver en maps</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>



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
