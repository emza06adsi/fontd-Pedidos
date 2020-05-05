import React from 'react';
import './css/aside.css'
import { Link } from 'react-router-dom';



class OpsionesAside extends React.Component {
    constructor(props){
        super(props)
       
      }
    render() {

        return (
                
                <section className="aside-paginas">
                <Link to={this.props.link}><p>{this.props.nombre}</p></Link>
                </section>
                
            
        )
    }

}
export default OpsionesAside;