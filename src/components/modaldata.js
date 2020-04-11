import React from 'react'
import './css/modaldata.css'
class Modaldata extends React.Component {


    cerrarModal() {
        document.getElementById('modal-overlay').style.animation = 'modalOut .8s forwards'
        document.getElementById("modal").classList.remove('active')
    }

    render() {
        return (
            <React.Fragment  >
                <section className="modal " id="modal">

                    <article className="modal-overlay" id="modal-overlay">
        <h1>{this.props.data}</h1>
                        <p>hols estabn meza beaycuur</p>

                        <div className="modal-buttons ">
                            <button onClick={this.cerrarModal} className="btn btn-success">volver</button>
                        </div>

                    </article>
                    {/* <section className="modal"> */}
                    {/*                 
                <h1>titulo</h1>
                        <p>hols estabn meza beaycuur</p>
                 
                    <div className="modal-buttons ">
                 <button onClick={eliminar} className="btn btn-success">volver</button>
                    </div> */}

                    {/* </section> */}

                </section>

            </React.Fragment>


        )
    }

}
export default Modaldata;