import React from 'react'
import './css/principal.css'
import api from '../api'
import TablaCliente from '../components/tablaClientes'
import PageLoading from '../components/PageLoading' 
import PageError from '../components/PageError'

// else if(this.state.error){
//     return (<PageError />);
//     // return `Eror: ${this.state.error.message}`;
//   }
// import Header from '../components/header'

class PedidosRealizados extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            loading: true,
            error: null,
            data: undefined
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null })

        try {
            const data = await api.tienda.listClientes()
            this.setState({ loading: false, data: data })

        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }


    // pedidos() {
    //     if (this.state.data.body[0] == "") {
    //         return <h1> no tenemos pedidos pendientes </h1>
    //     } else {
    //         <TablaCliente clientes={this.state.data} />
    //         // return <Modalpedidos pedidos={this.state.data} />
    //     }


    // }


    render() {

        if (this.state.loading === true) {
            return < PageLoading />

        }else if(this.state.error){
                return (<PageError />);
                // return `Eror: ${this.state.error.message}`;
              }

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
                            {/* {this.pedidos()} */}
                            <TablaCliente clientes={this.state.data} />

                        </table>

                    </div>

                </section>



            </React.Fragment>

        )
    }

}

export default PedidosRealizados;