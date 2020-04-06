import React from 'react';
import './css/aside.css'
class OpsionesAside extends React.Component {
    constructor(props){
        super(props)
       
      }
    render() {

        return (
                
                <section className="aside-paginas">
                <a href={this.props.link}><p>{this.props.nombre}</p></a>
                </section>
                
            
        )
    }

}
export default OpsionesAside;