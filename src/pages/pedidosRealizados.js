import React from 'react'
import './css/principal.css'
import Modalpedidos from '../components/modalpedidos.js'
import api from '../api'
import PageLoading from '../components/PageLoading' 
import PageError from '../components/PageError'

// import Aside from '../components/aside'
// import Header from '../components/header'
class PedidosRealizados extends React.Component {

    constructor(props) {
        console.log("1 constructor()")

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
            const data = await api.tienda.listPedidosInactivos()
            this.setState({ loading: false, data: data })

        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }

    pedidos() {
        if (this.state.data.body[0] == "") {
            return <h1> no tenemos pedidos pendientes </h1>
        } else {
            return <Modalpedidos pedidos={this.state.data} />
        }


    }

    render() {

        if (this.state.loading === true) {
            return <PageLoading/> 

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
                                <th className="sticky">numero del pedido</th>
                                <th className="sticky">numero de usuario</th>
                                <th className="sticky">nombre del usuario</th>
                                <th className="sticky">direccion del pedido</th>
                                <th className="sticky">ver pedido</th>
                                
                            </tr>

                            {this.pedidos()}



                        </table>



                    </div>

                </section>



            </React.Fragment>


        )
    }

}

export default PedidosRealizados;
