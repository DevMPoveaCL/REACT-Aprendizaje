//Mismo caso, importar react y sus funciones predeterminadas de "node_modules"
import React, { useState, useEffect } from "react";

//creamos el componente de usuario vacío por defecto
const initialUsuario = {
    nombre: "",
    apellido: "",
    correo: "",
    rut: ""
}
//Creamos el componente asociado al formulario de usuario junto con sus propiedades.
const UserFormComponent = ({ userAdd, usuarioEditado, setUsuarioEditado, userEdit }) => {
    const [usuario, setUsuario] = useState(initialUsuario);
    const { nombre, apellido, correo, rut } = usuario;

    //configuramos el formulario de usuario editado según los parámetros ingresados, sino, en caso de tener valores nulos configuramos el parametro de usuario como vacío
    useEffect(() => {
        if (usuarioEditado !== null) {
            setUsuario(usuarioEditado);
        } else {
            setUsuario(
                {
                    nombre: "",
                    apellido: "",
                    correo: "",
                    rut: "",
                }
            )

        }
    }, [usuarioEditado]);

    //Componente que se activa cuando hacemos un cambio en los campos del formulario.
    const handleInputChange = (e) => {
        const changedFormValue = {
            ...usuario,
            [e.target.name]: e.target.value
        }
        setUsuario(changedFormValue);
    }

    return (
        <div class="card container mb-2">
            <form>
                {/* condicional similar al "if", el cual cambia el título de nuestro formulario según la acción en la que se encuentre el usuario.
                si se está ingresando un usuario, usuarioEditado será nulo, por ende se activará "Ingrese usuario", si se pulsa "editar" (en el botón de la tabla)...
    "usuarioEditado", dejará de ser nulo, enconsecuencia, se mostrará el primer título "Editar Usuario"  */}
                {usuarioEditado !== null ? <h1>Editar Usuario</h1> : <h1>Ingrese Usuario</h1>}
                <div class="mb-3" >
                    <label class="form-label" for="id">Rut</label>
                    <input class="form-control" placeholder="11111111-1" type="text" id="id" name="rut" value={rut} onChange={handleInputChange} />
                </div>
                <div class="mb-3" >
                    <label class="form-label" for="id">Nombre</label>
                    <input class="form-control" placeholder="Juan" type="text" id="Nombre" name="nombre" value={nombre} onChange={handleInputChange} />
                </div>
                <div class="mb-3" >
                    <label class="form-label" for="id">Apellido</label>
                    <input class="form-control" placeholder="Perez" type="text" id="Apellido" name="apellido" value={apellido} onChange={handleInputChange} />
                </div>
                <div class="mb-3" >
                    <label class="form-label" for="id">Correo</label>
                    <input class="form-control" placeholder="juanperez@correo.cl" type="email" id="Correo" name="correo" value={correo} onChange={handleInputChange} />
                </div>
                {/* activa o desactiva los botones según el estado "null=nulo" de del componente "usuarioEditado" */}
                {usuarioEditado !== null ? (
                    <button
                        type="button"
                        class="btn btn-success"
                        onClick={() => userEdit(usuario)}
                    >
                        Editar usuario
                    </button>
                ) : (
                    <button
                        type="button"
                        class="btn btn-success"
                        onClick={() => userAdd(usuario)}
                    >
                        Ingresar usuario
                    </button>
                )}
                {usuarioEditado !== null ? (
                    <button
                        type="button"
                        class="btn btn-danger"
                        onClick={() => setUsuarioEditado(null)}
                    >
                        Cancelar
                    </button>
                ) : (
                    <></>
                )}


                <br />
            </form>
        </div>
    )

};

export default UserFormComponent;