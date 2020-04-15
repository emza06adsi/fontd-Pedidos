import React from 'react'
import './css/formNewProducto.css'



class NewProducto extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            error: null,
            data: undefined,
            array: new Array()
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.handleFil()
    }

    handleFil() {
        // this.setState({ loading: true, error: null })

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
        // https://codepen.io/Cepm10/pen/jOOGeBd
    }

    handleSubmit = e => {
        e.preventDefault();
        alert()
        var img = new Image();
        img.src =document.cookie
        img.height = 60;
        document.getElementById("prueba").appendChild(img)
        
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
                                    <input required type="number" placeholder="codigo del producto"></input>
                                </div>
                                <div className="camposForm">
                                    <label for="exampleInputEmail1">tipo del producto:</label>
                                    <select value="" >
                                        <option value="papeleria">papeleria</option>
                                        <option value="tecnologia">tecnologia</option>
                                        <option value="otro">otro</option>
                                    </select>
                                </div>
                                <div className="camposForm">
                                    <label for="exampleInputEmail1">nombre del producto:</label>
                                    <input required type="text" placeholder="nombre del producto"></input>
                                </div>
                                <div className="camposForm">
                                    <label for="exampleInputEmail1">cantidad del producto:</label>
                                    <input required type="number" placeholder="cantidad del producto"></input>
                                </div>
                                <div className="camposForm">
                                    <label for="exampleInputEmail1">precio del producto:</label>
                                    <input required type="number" placeholder="precio del producto"></input>
                                </div>
                                <div className="camposForm">
                                    <label for="exampleInputEmail1">imagen del producto:</label>
                                    <input type="file" id="fileElem" multiple accept="image/*" className="imagenSubir"></input>
                                    <img onClick={this.handleClick} src="https://img.icons8.com/color/48/000000/folder-invoices.png" />
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
