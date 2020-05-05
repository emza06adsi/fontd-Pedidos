import React  from 'react'
import Header from '../components/header'
import Aside from '../components/aside'

import '../pages/css/principal.css'

function Layout(props) {
    
    
    return (
        <div className="div">

                {/* <header className="header"></header> */}
                <main className="main">
                    <Aside />
                    <section className="content">
                        <Header />
                        {props.children}           
                    </section>

                </main>
                <footer className="footer">
                    <strong>@meza</strong>
                </footer>


            </div>
        
    )
}
export default Layout; 