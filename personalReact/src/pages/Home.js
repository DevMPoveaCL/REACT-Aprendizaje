import React, { useCallback, useState } from "react"; //"Hooks", callback: devuelve una función a su referencia previa (para nuestro caso lo utilizamos como un "volver atrás"), State: retorna el valor actual y el que actualizará a través de un array[2].
import { useNavigate } from "react-router-dom"; //conecta la navegación de la página "Home" a través del puerto que utiliza react por defecto.
import { UserFormComponent } from "../components"; //importa el formulario de usuario
import TableUser from "../components/TableUser"; //importa la tabla de usuario
import ButtonUser from "../components/ButtonUser" //importa el botón previamente creado (botón universal - dinámico)

// función que crea los "usuarios" que se muestran por defecto en la tabla usuario
const usuario1 = [{
    nombre: "Joseph",
    apellido: "Joestar",
    correo: "jo.jo@gmail.com",
    rut: "12345234-4"
}, {
    nombre: "Josuke",
    apellido: "Higa",
    correo: "jojo@gmail.com",
    rut: "12345655-2"
}]


//función que engloba todo los componentes utilizados en la página de "Home"
const HomePage = () => {
    //Navegación de la página
    const navigate = useNavigate();
    //cuando se clickea sobre el componente devuelve a la navegación referenciada previamente.
    const handleOnClick = useCallback(() => navigate("/Auto", {}, [navigate]))
    //función con los valores de usuario (actual y por el cual se actualizará)
    const [user, setState] = useState(usuario1);
    const [usuarioEditado, setUsuarioEditado] = useState(null);

    //elimina el usuario
    const userDelete = (rutUsuario) => {
        const changeUser = user.filter(usuario => usuario.rut != rutUsuario);
        setState(changeUser)
    }

    //añade el usuario
    const userAdd = (usuario) => {
        const addUsuario = [
            ...user, usuario
        ]
        setState(addUsuario);
    }

    //edita el usuario
    const userEdit = (usuarioEditado) => {
        //Importante recordar que el map recorre nuestro componente usuario. En este caso, compara nuestro parametro a editar según el valor asignado (rut), si el parámetro coincide con la función... se actualiza el dato.
        const editUser = user.map(usuario => (usuario.rut === usuarioEditado.rut ? usuarioEditado : usuario))

        setState(editUser);
    }

    return (
        <div>
            {/* Se pasan los parámetros para cada componente, sino, nuestras propiedades no interactuarán con nuestros componentes */}
            <h2>Bienvenido/a: </h2>
            <br></br>
            <UserFormComponent userAdd={userAdd} usuarioEditado={usuarioEditado} setUsuarioEditado={setUsuarioEditado} userEdit={userEdit} />
            <br></br>
            <TableUser usuarios={user} deleteUser={userDelete} setUsuarioEditado={setUsuarioEditado} />
            <br></br>
            <ButtonUser infoBoton={"Ir a autos"} handleOnClick={handleOnClick} />


        </div>
    )
}
export default HomePage;


