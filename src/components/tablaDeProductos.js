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
                    <section className="container">
                        <div className="modal-vista" tabindex="-1" role="dialog">

                        <table id="customers">
                            <tr>
                                <th className="sticky">documento del producto</th>
                                <th className="sticky">nombre del producto</th>
                                <th className="sticky">cantidad del producto</th>
                                <th className="sticky">imagen del producto</th>
                                
                            </tr>
                            <tr>
                            <td>Alfreds Futterkiste</td>
                                <td>Maria Anders</td>
                                <td>Germany</td>
                                <td>Alfreds Futterkiste</td>
                                
                            </tr>
                            <tr>
                            <td>Alfreds Futterkiste</td>
                                <td>Maria Anders</td>
                                <td>Germany</td>
                                <td>Alfreds Futterkiste</td>
                                
                            </tr><tr>
                            <td>Alfreds Futterkiste</td>
                                <td>Maria Anders</td>
                                <td>Germany</td>
                                <td>Alfreds Futterkiste</td>
                                
                            </tr><tr>
                            <td>Alfreds Futterkiste</td>
                                <td>Maria Anders</td>
                                <td>Germany</td>
                                <td>Alfreds Futterkiste</td>
                                
                            </tr><tr>
                            <td>Alfreds Futterkiste</td>
                                <td>Maria Anders</td>
                                <td>Germany</td>
                                <td>Alfreds Futterkiste</td>
                                
                            </tr>
                            
                        </table>



                    </div>

                </section>



            </React.Fragment>


        )
    }

}

export default TablaProductos;













