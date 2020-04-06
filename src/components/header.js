import React from 'react';

class Header extends React.Component {
    render() {

        return (
            // <nav className="navbar"></nav>
            <div className="header">
            <img src="" />
            <div className="header__menu">
              <div className="header__menu--profile">
                <p>Usuario</p>
              </div>
              
              <ul>
                <li><a href="/Cuenta">Cuenta</a></li>
                <li><a href="/">Cerrar Sesión</a></li>
                
              </ul>
              </div>
             
            </div>
              
      
        )
    }

}
export default Header;