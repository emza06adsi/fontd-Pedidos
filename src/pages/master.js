import React from 'react'
import './css/principal.css'
import Modalpedidos from '../components/modalpedidos.js'
import api from '../api'
// import Aside from '../components/aside'
// import Header from '../components/header'
class Master extends React.Component {

    // constructor(props) {
    //     console.log("1 constructor()")

    //     super(props)

    state = {
        loadig: true,
        error: null,
        data: undefined
    }
    // }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({ loadig: true, error: null })

        try {
            // const data = await api.tienda.list()
            // let data2 = new Array()
            // data2[0] = data.body
           let response =await fetch("http://localhost:3001/api/pedidos/pedido/inactivos");
           let data =await response.json()
            this.setState({ loadig: false, data:data.body })

        } catch (error) {
            this.setState({ loadig: false, error: error })
        }
    }

    render() {

        if (this.state.loadig === true) {
            return ("loadig ---")
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
                                <th className="sticky">buscar en el mapa</th>
                            </tr>

                            <Modalpedidos pedidos={this.state.data} />
                            {/* { this.state.data.map((modalpedidos)=>{
                             
                             return(
                             <Modalpedidos 
                                modalpedidosnumeroPedido={23}
                                idUsuario={1023955260}
                                nombreUsuario={"esteban"}
                                direccionPedido={"xxx"}
                                data={"data"}
                                mapa={""} /> 
                            
                             )
                             
                            }) } */}


                        </table>



                    </div>

                </section>



            </React.Fragment>


        )
    }

}

export default Master;