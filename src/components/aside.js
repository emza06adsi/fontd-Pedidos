import React from 'react';
import './css/aside.css'
import OpsionesAside from './opsionesAside'
class Aside extends React.Component {
    render() {

        return (
            <aside className="aside">
                <nav className="aside-navbar"></nav>
                
                <OpsionesAside link="/pendientes" nombre="pedidos pendientes"/>
                
                <OpsionesAside link="/realizados" nombre="pedidos realizados"/>
                
                <OpsionesAside link="/clientes" nombre="clientes"/>
                
                <OpsionesAside link="/productos" nombre="productos"/>
                
                
            </aside>
        )
    }

}
export default Aside;