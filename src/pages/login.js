import React from "react"
// import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import './css/login.css'


class login extends React.Component {

cambiotipo(){
 let inputP=document.getElementById("contraseña")
 if(inputP.type=="text"){
    inputP.type="password"
    document.getElementById("imgcontraseña").src="https://img.icons8.com/windows/20/000000/visible.png";
 }else{
    inputP.type="text"
    document.getElementById("imgcontraseña").src="https://img.icons8.com/windows/20/000000/invisible.png";
 }
}

    render() {
        return (
            <div className="modal" id="modal">
                <h1>INICIO DE SESION </h1>

                <form action="" method="get" className="input">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">
                            <img src="https://img.icons8.com/windows/20/000000/user-male.png"/>
                            </span>
                        </div>
                        <input type="text" className="form-control" placeholder="Correo" aria-label="Username" aria-describedby="basic-addon1"></input>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">
                            <img src="https://img.icons8.com/windows/20/000000/lock.png"/>
                            </span>
                        </div>
                        <input id="contraseña"  type="password" className="form-control" placeholder="Contraseña" aria-label="Contraseña" aria-describedby="basic-addon1"></input>
                        <div className="input-group-prepend">
                            <span onClick={this.cambiotipo} className="input-group-text" id="basic-addon1">
                            <img id="imgcontraseña" src="https://img.icons8.com/windows/20/000000/visible.png"/>
                            
                            </span>
                        </div>
                    </div>
                    <button class="modal-btn" id="btnIngresar">INGRESAR</button>

                </form>
                <a href="">olvidaste tu contraseña</a>
            </div>

        )
    }


}
export default login;

