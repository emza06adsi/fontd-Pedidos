import React, { useDebugValue } from 'react'
import './css/modalPedidos.css'
import Modaldata from '../components/modaldata'
import api from '../api'
// import Header from '../components/header'
class Modalpedidos extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            error: null,
            data: undefined
        }

    }

    componentDidMount() {
        this.setState({ loading: true, error: null })
    }
     datosPedido(event) {
        this.fetchData()
        
        
        // const data = await api.tienda.listPedidosActivos()
        // // this.state.data=data
        // this.setState({ loading: false, data: JSON.stringify(data) })
        // alert(JSON.stringify(this.state.data))
     
        // // this.fetchData()

    }

    fetchData = async () => {
        this.setState({ loading: true, error: null })
        try {
            const data = await api.tienda.listPedidosActivos()
            this.setState({ loading: false, data: JSON.stringify(data) })
            document.getElementById('modal-overlay').style.animation = 'modalIn .8s forwards'
            document.getElementById("modal").classList.add('active')
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }

    verModal() {

    }

    render() {
        return (

            <React.Fragment>


                {

                    this.props.pedidos.body[0].map((pedido) => {
                        return (

                            <tr key={pedido.ped_id}>
                                <td>{pedido.ped_id}</td>
                                <td>{pedido.us_id}</td>
                                <td>{pedido.us_nombre}</td>
                                <td>{pedido.us_direccion}</td>
                                <td><button id={pedido.ped_id} className="btn btn-primary" onClick={this.componentDidUpdate} >contenido del pedido</button></td>
                                <td><button className="btn btn-warning">buscar en pams</button></td>
                            </tr>
                        )
                    })
                }

                <Modaldata data={this.state.data}/>

                {/* {this.datosPedido} */}



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
