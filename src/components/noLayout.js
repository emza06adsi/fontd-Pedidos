import React  from 'react'
import '../pages/css/principal.css'

function NoLayout(props) {
    
    
    return (
        // return props.children;
        <div className="div">

                {/* <header className="header"></header> */}
                {/* <main className="main">
                    <Aside />
                    <section className="content">
                        <Header /> */}
                
                
                    {props.children}           
                    {/* </section> */}

                {/* </main>
                <footer className="footer">
                    <strong>@meza</strong>
                </footer> */}


            </div>
        
    )
}
export default NoLayout;