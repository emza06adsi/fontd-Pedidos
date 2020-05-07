import React from 'react'
import './css/formNewProducto.css'
import api from '../api'
import axios from 'axios'

var datosprueba = ""
class NewProducto extends React.Component {

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
        document.getElementById('modal-overlay').style.animation = 'modalOut .8s forwards'
        document.getElementById("modal").classList.remove('active')
    }

    handleSubmit = async e => {
        e.preventDefault();
        // alert(datosprueba)
        let datosEnvio = {
            codigo: this.state.codigo,
            nombre: this.state.nombre,
            tipo:this.state.select,
            cantidad: this.state.cantidad,
            precio: this.state.precio,
            file: datosprueba
        }
        // api.tienda.crearProducto(datosEnvio,axios)
        axios.post("http://localhost:3001/api/tienda/", datosEnvio, {
        }).then(res => {
          alert("error")
        })
        // alert(JSON.stringify(datosEnvio))
        

    };

    render() {

        return (
            <React.Fragment>

                <section className="modal" id="modal">

                    <article className="modalforms-overlay" id="modal-overlay">
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
                                    <label for="exampleInputEmail1">tipo del producto:</label>
                                    <select
                                        name="select"
                                        value={this.state.select}
                                        onChange={this.handleChange}>
                                        <option value="">--SELECCIONE--</option>
                                        <option value="dulceria">dulceria</option>
                                        <option value="papeleria">papeleria</option>
                                        <option value="tecnologia">tecnologia</option>
                                        <option value="otro">otro</option>
                                    </select>
                                </div>
                                <div className="camposForm">
                                    <label for="exampleInputEmail1">nombre del producto:</label>
                                    <input
                                        name="nombre"
                                        onChange={this.handleChange}
                                        value={this.state.nombreProducto}
                                        required type="text"
                                        placeholder="nombre del producto"
                                    ></input>
                                </div>
                                <div className="camposForm">
                                    <label for="exampleInputEmail1">cantidad del producto:</label>
                                    <input
                                        name="cantidad"
                                        onChange={this.handleChange}
                                        value={this.state.cantidadProducto}
                                        required type="number"
                                        placeholder="cantidad del producto"></input>
                                </div>
                                <div className="camposForm">
                                    <label for="exampleInputEmail1">precio del producto:</label>
                                    <input
                                        name="precio"
                                        onChange={this.handleChange}
                                        value={this.state.precioProducto}
                                        required type="number"
                                        placeholder="precio del producto"
                                    ></input>
                                </div>
                                <div className="camposForm">
                                    <label for="exampleInputEmail1">imagen del producto:</label>
                                    <input
                                        type="file"
                                        value={this.state.file}
                                        name="file"
                                        id="fileElem"
                                        multiple accept="image/*"
                                        className="imagenSubir"
                                        onChange={this.handleChange}></input>
                                    <img onClick={this.handleFil} src="https://img.icons8.com/color/48/000000/folder-invoices.png" />
                                    <div id="fileList">

                                    </div>
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

export default NewProducto;
