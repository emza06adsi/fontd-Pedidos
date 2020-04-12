import React from 'react'
import './css/principal.css'
import api from '../api'
import TablaProductos from '../components/tablaDeProductos'
// import Header from '../components/header'

class Productos extends React.Component {
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
            const data = await api.tienda.listProductos()
            this.setState({ loading: false, data: data })
            let $data = ""
            this.state.data.body[0].map((productos) => {
                $data += `
                <tr>
                    <td>${productos.pro_id}</td>
                    <td>${productos.pro_nombre}</td>
                    <td>${productos.pro_cantidad}</td>
                    <td>${"imagen"}</td>
                </tr>
                `

            })
            document.getElementById("tbody").innerHTML=$data
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }

    render() {

        if(this.state.loading === true){
            return("loading....")
        }

        return (
            <React.Fragment>
                <section className="container">
                    <div className="modal-vista" tabindex="-1" role="dialog">

                        <table id="customers">
                            <thead>
                                <tr>
                                    <th className="sticky">id</th>
                                    <th className="sticky">nombre del producto</th>
                                    <th className="sticky">cantidad del producto</th>
                                    <th className="sticky">imagen del producto</th>

                                </tr>
                            </thead>
                            <tbody id="tbody">
                                {/* <TablaProductos
                                    documento={24}
                                    nombre={"cableutp"}
                                    cantidad={"25"}
                                    imagen={"img"}
                                /> */}
                            </tbody>
                        </table>



                    </div>

                </section>



            </React.Fragment>



        )
    }

}

export default Productos;