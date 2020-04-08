import React from 'react'
import './css/modalPedidos.css'
// import Aside from '../components/aside'
// import Header from '../components/header'
class TablaProductos extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <React.Fragment>

                <tr>
                    <td>{this.props.documento}</td>
                    <td>{this.props.nombre}</td>
                    <td>{this.props.cantidad}</td>
                    <td>{this.props.imagen}</td>

                </tr>

            </React.Fragment>


        )
    }

}

export default TablaProductos;













