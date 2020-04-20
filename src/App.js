import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'




// pages
import NoLayout from './components/noLayout'
import Layout from './components/layout'
// import Login from './pages/login'
import Ingreso from './pages/login'
import Master from './pages/master'
import PedidosRealizados from './pages/pedidosRealizados'
import Clientes from './pages/clientes'
import Productos from './pages/productos'
import E404 from './pages/404'
//
function App() {

    let ruta = "pendientes"

    return (

        <BrowserRouter>

                <Switch>
                    <Route exact path="/" component={Ingreso} />

      
                <Layout>
                    <Switch>
                        <Route exact path='/pendientes' component={Master} />
                        <Route exact path="/realizados" component={PedidosRealizados} />
                        <Route exact path="/clientes" component={Clientes} />
                        <Route exact path="/productos" component={Productos} />
                        <Route component={E404} />
                    </Switch>
                </Layout>
            </Switch>
        </BrowserRouter>
    );
}

export default App;