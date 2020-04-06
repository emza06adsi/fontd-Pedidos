import React from 'react'
import './css/principal.css'
import Aside from '../components/aside'
import Header from '../components/header'
class Master extends React.Component {

    render() {
        return (
            <div className="div">

                {/* <header className="header"></header> */}
                <main className="main">
                    <Aside/>
                    <section className="content">
             <Header/>
                        
                    </section>

                </main>
                <footer className="footer">
                    <strong>@meza</strong>
                </footer>


            </div>
        )
    }

}

export default Master;