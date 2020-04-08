import React from 'react'
import './css/principal.css'
import Modalpedidos from '../components/modalpedidos.js'
// import Aside from '../components/aside'
// import Header from '../components/header'
class Master extends React.Component {

    constructor(props){
        console.log("1 constructor()")

        super(props)
    
       this.state={
            data:[
                {numeroPedido:23,
                idUsuario:1023955260,
                nombreUsuario:"esteban",
                direccionPedido:"xxx",
                data:"data",
                mapa:"",},
                {numeroPedido:24,
                    idUsuario:1023955265,
                    nombreUsuario:"mario",
                    direccionPedido:"xxx",
                    data:"data",
                    mapa:"",},
                {numeroPedido:25,
                    idUsuario:1023955280,
                    nombreUsuario:"angie",
                    direccionPedido:"xxx",
                    data:"data",
                    mapa:"",},
            ]
        }
        }

    componentDidMount(){
        console.log("3 componentDidMount()")
    }
    
componentDidUpdate(prevProps, prevState){
    console.log("5 componentDidUpdate")
console.log({ 
    prevProps:prevProps, 
    prevState:prevState
})
}

componentWillUnmount(){
    console.log("componentWillUnmount  ")
    clearTimeout();
}
    render() {
        console.log("2 render()")
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