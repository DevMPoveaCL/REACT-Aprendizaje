import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserFormComponent } from "../components";
import TableUser from "../components/TableUser";
import ButtonUser from "../components/ButtonUser"

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



const HomePage = () => {
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate("/Auto", {}, [navigate]))
    const [user, setState] = useState(usuario1);
    const [usuarioEditado, setUsuarioEditado] = useState(null);

    const userDelete = (rutUsuario) => {
        const changeUser = user.filter(usuario => usuario.rut != rutUsuario);
        setState(changeUser)
    }

    const userAdd = (usuario) => {
        const addUsuario = [
            ...user, usuario
        ]
        setState(addUsuario);
    }

    const userEdit = (usuarioEditado) => {
        const editUser = user.map(usuario => (usuario.rut === usuarioEditado.rut ? usuarioEditado : usuario))

        setState(editUser);
    }

    return (
        <div>
            <h2>Bienvenido/a: </h2>
            <br></br><br></br>
            <UserFormComponent userAdd={userAdd} usuarioEditado={usuarioEditado} setUsuarioEditado={setUsuarioEditado} userEdit={userEdit} />
            <ButtonUser infoBoton={"Ir a autos"} handleOnClick={handleOnClick} />

            <br></br>
            <TableUser usuarios={user} deleteUser={userDelete} setUsuarioEditado={setUsuarioEditado} />


        </div>
    )
}
export default HomePage;


