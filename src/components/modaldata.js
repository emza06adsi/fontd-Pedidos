import React from 'react'
import './css/modaldata.css'
class Modaldata extends React.Component {

    constructor(props) {
        super(props)


        this.state = {
            loading: true,
            error: null,
            data: undefined

        }
        this.handleClick = this.handleClick.bind(this)
        this.datos = JSON.stringify(this.props.data)
    }

    handleClick() {
        this.setState({ data: this.props.data })
        alert(this.state.data)
    }


    // componentWillMount(){
    //     this.setState({data:this.props.data})
    //     this.setState({ data: data })
    //     // alert(JSON.stringify(this.state.data))
    // }

    cerrarModal() {
        document.getElementById('modal-overlay').style.animation = 'modalOut .8s forwards'
        document.getElementById("modal").classList.remove('active')
    }

    render() {

        // if (this.state.loading === true) {
        //     return (".")
        // }

        return (
            <React.Fragment  >
                <section className="modal " id="modal">

                    <article className="modal-overlay" id="modal-overlay">

                        <table id="customers">
                            <tr>
                                <th className="sticky">id</th>
                                <th className="sticky">nombre</th>
                                <th className="sticky">presio</th>
                                <th className="sticky">cantidad</th>
                                <th className="sticky">valor</th>

                            </tr>
                            
                            {/* {JSON.parse(this.datos[0])} */}
                        </table>

                        <div className="modal-buttons ">
                            <button onClick={this.cerrarModal} className="btn btn-success">volver</button>
                        </div>

                    </article>
                  
                </section>

            </React.Fragment>


        )
    }

}
export default Modaldata;