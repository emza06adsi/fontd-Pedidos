import React from 'react'
import './css/modalPedidos.css'
// import Aside from '../components/aside'
// import Header from '../components/header'
class TablaClientes extends React.Component {

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
                                <th className="sticky">documento del cliente</th>
                                <th className="sticky">nombre del cliente</th>
                                <th className="sticky">correo del cliente</th>
                                <th className="sticky">direccion del cliente</th>
                                
                            </tr>
                            <tr>
                            <td>Alfreds Futterkiste</td>
                                <td>Maria Anders</td>
                                <td>Germany</td><td>Alfreds Futterkiste</td>
                                
                            </tr>
                            <tr>
                            <td>Alfreds Futterkiste</td>
                                <td>Maria Anders</td>
                                <td>Germany</td><td>Alfreds Futterkiste</td>
                                
                            </tr>
                            <tr>
                            <td>Alfreds Futterkiste</td>
                                <td>Maria Anders</td>
                                <td>Germany</td><td>Alfreds Futterkiste</td>
                                
                            </tr>
                            <tr>
                            <td>Alfreds Futterkiste</td>
                                <td>Maria Anders</td>
                                <td>Germany</td><td>Alfreds Futterkiste</td>
                                
                            </tr>
                            <tr>
                            <td>Alfreds Futterkiste</td>
                                <td>Maria Anders</td>
                                <td>Germany</td><td>Alfreds Futterkiste</td>
                                
                            </tr><tr>
                            <td>Alfreds Futterkiste</td>
                                <td>Maria Anders</td>
                                <td>Germany</td><td>Alfreds Futterkiste</td>
                                
                            </tr>
                            
                        </table>



                    </div>

                </section>



            </React.Fragment>


        )
    }

}

export default TablaClientes;














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