import React from 'react'
import './css/formNewProducto.css'
import api from '../api'
import axios from 'axios'

var datosprueba = ""
class UpdateProducto extends React.Component {

    constructor(props) {
        super(props)

        this.state = {};


        this.handleChange = this.handleChange.bind(this)
    }
    handleChange = e => {
        if (e.target.name == "file") {
            this.getBase64(e.target.files[0])
        }
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    getBase64 = file => {
        return new Promise(resolve => {
            let baseURL = "";

            let reader = new FileReader();


            reader.readAsDataURL(file);


            reader.onload = () => {


                baseURL = reader.result;
                alert(baseURL);
                datosprueba = baseURL
                resolve(baseURL);
            };

        });
    };


    handleFil() {

        const fileElem = document.getElementById("fileElem"),
            fileList = document.getElementById("fileList");
        fileElem.click();

        fileElem.addEventListener("change", handleFiles, false);

        function handleFiles() {
            if (!this.files.length) {
                fileList.innerHTML = "<p>No fue selecionado ningun archivo!</p>";
            } else {
                fileList.innerHTML = "";
                this.data = this.files;
                for (let i = 0; i < this.files.length; i++) {

                    const img = document.createElement("img");
                    img.src = URL.createObjectURL(this.files[i]);
                    document.cookie = URL.createObjectURL(this.files[i]);
                    img.height = 60;
                    img.onload = function () {
                        URL.revokeObjectURL(this.src);
                    }
                    fileList.appendChild(img);
                }
            }
        }

    }

    cerrarModal() {
        document.getElementById('modal-overlayA').style.animation = 'modalOut .8s forwards'
        document.getElementById("modalA").classList.remove('active')
    }

    handleSubmit = async e => {
        e.preventDefault();

        let datosEnvio = {

            codigo: this.state.codigo,
            cantidad: this.state.cantidad
        }
        // api.tienda.updateProductos(datosEnvio)

        fetch('http://localhost:3001/api/tienda/', {
            method: 'put',
            headers: {
                'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
            },
            body: JSON.stringify(datosEnvio) // We send data in JSON format
        
        
            })

    // axios.post("http://localhost:3001/api/tienda/put/", datosEnvio, {
    // }).then(res => {
    //     alert("error")
    // })
    // alert(JSON.stringify(datosEnvio))


};

render() {

    return (
        <React.Fragment>

            <section className="modal" id="modalA">

                <article className="modalforms-overlay" id="modal-overlayA">
                    <div className="cerrarBtn">
                        <button onClick={this.cerrarModal}>x</button>
                    </div>

                    <form onSubmit={this.handleSubmit}>
                        <section className="">

                            <div className="camposForm">
                                <label for="exampleInputEmail1">codigo del producto:</label>
                                <input
                                    name="codigo"
                                    onChange={this.handleChange}
                                    value={this.state.codigoProducto}
                                    required
                                    type="number"
                                    placeholder="codigo del producto"
                                ></input>
                            </div>
                            <div className="camposForm">
                                <label for="exampleInputEmail1">new cantidad:</label>
                                <input
                                    name="cantidad"
                                    onChange={this.handleChange}
                                    value={this.state.nombreProducto}
                                    required type="number"
                                    placeholder="new cantidad"
                                ></input>
                            </div>


                        </section>

                        <div className="modal-buttons-form">
                            <button className="form-control btn btn-success">ingresar producto</button>
                        </div>
                        <div id="prueba"></div>
                    </form>

                </article>

            </section>


        </React.Fragment>

    )

}

}

export default UpdateProducto;
