import React from 'react';
import './css/aside.css'
import OpsionesAside from './opsionesAside'
class Aside extends React.Component {
    render() {

        return (
            <aside className="aside">
                <nav className="aside-navbar"></nav>
                
                <OpsionesAside link="opsiones" nombre="pedidos pendientes"/>
                
                <OpsionesAside link="opsiones" nombre="pedidos realizados"/>
                
                <OpsionesAside link="opsiones" nombre="clientes"/>
                
                <OpsionesAside link="opsiones" nombre="productos"/>
                
                
            </aside>
        )
    }

}
export default Aside;