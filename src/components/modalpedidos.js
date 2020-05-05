import React from 'react'
import './css/modalPedidos.css'
import api from '../api'
import './css/modaldata.css'

class Modalpedidos extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            error: null,
            data: undefined,
            array: new Array()
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        this.fetchData(event.target.id)
    }
    fetchData = async (id) => {
        this.setState({ loading: true, error: null })
        try {
            const data = await api.tienda.listProductosPorId(id)
            this.setState({ loading: false, data: data })

            let $data = "";
            let $total = 0
            this.state.data.body[0].map((data) => {

                $data += `
                <tr>
                    <td>${data.paq_id}</td>
                    <td>${data.pro_nombre}</td>
                    <td>${data.pro_valor}</td>
                    <td>${data.paq_cantidad}</td>
                    <td>${data.pro_valor * data.paq_cantidad}</td>
                    </tr>
                `
                $total += data.pro_valor * data.paq_cantidad

            })

            $data += `
                <tr>
                    <th>TOTAL</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th>${$total}</th>
                </tr>
                `

            document.getElementById("tabla").innerHTML = $data

            document.getElementById('modal-overlay').style.animation = 'modalIn .8s forwards'
            document.getElementById("modal").classList.add('active')

        } catch (error) {
            this.setState({ loading: false, error: error })

        }
    }

    cerrarModal() {
        document.getElementById('modal-overlay').style.animation = 'modalOut .8s forwards'
        document.getElementById("modal").classList.remove('active')
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
                                <td><button id={pedido.ped_id} className="btn btn-primary" onClick={this.handleClick} >contenido del pedido</button></td>
                            </tr>
                        )
                    })
                }

                <section className="modal " id="modal">

                    <article className="modal-overlay" id="modal-overlay">

                        <table id="customers">
                            <thead>
                                <tr>
                                    <th className="sticky">id</th>
                                    <th className="sticky">nombre</th>
                                    <th className="sticky">presio</th>
                                    <th className="sticky">cantidad</th>
                                    <th className="sticky">valor cantidad</th>

                                </tr>
                            </thead>
                            <tbody id="tabla">

                            </tbody>
                        </table>

                        <div className="modal-buttons">
                            <button onClick={this.cerrarModal} className="form-control btn btn-success">volver</button>
                        </div>

                    </article>

                </section>




            </React.Fragment>


        )
    }

}

export default Modalpedidos;
