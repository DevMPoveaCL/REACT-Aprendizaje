
//Mismo caso, importar react y sus funciones predeterminadas de "node_modules"
import React, { useState, useEffect } from "react";

//creamos el componente de auto vacío por defecto
const initialAuto = {
    codigo: "",
    marca: "",
    modelo: "",
    anio: "",
    color: "",
    precio: ""
}

//Creamos el componente asociado al formulario de auto junto con sus propiedades.
const CarFormComponent = ({ carAdd, autoEditado, setAutoEditado, carEdit }) => {
    const [auto, setAuto] = useState(initialAuto);
    const { codigo, marca, modelo, anio, color, precio } = auto;

    //configuramos el formulario de auto editado según los parámetros ingresados, sino, en caso de tener valores nulos configuramos el parametro de auto como vacío
    useEffect(() => {
        if (autoEditado !== null) {
            setAuto(autoEditado);
        } else {
            setAuto(
                {
                    codigo: "",
                    marca: "",
                    modelo: "",
                    anio: "",
                    color: "",
                    precio: ""
                }
            )

        }
    }, [autoEditado]);

    //Componente que se activa cuando hacemos un cambio en los campos del formulario.
    const handleInputChange = (e) => {
        const changedFormValue = {
            ...auto,
            [e.target.name]: e.target.value
        }
        setAuto(changedFormValue);
    }

    return (
        <div class="card container mb-2">
            <form>
                {/* condicional similar al "if", el cual cambia el título de nuestro formulario según la acción en la que se encuentre el usuario.
                si se está ingresando un auto, autoEditado será nulo, por ende se activará "Ingrese auto", si se pulsa "editar" (en el botón de la tabla)...
                "autoEditado", dejará de ser nulo, en consecuencia, se mostrará el primer título "Editar Auto"  */}
                {autoEditado !== null ? <h1>Editar Auto</h1> : <h1>Ingrese Auto</h1>}
                <div class="mb-3" >
                    <label class="form-label" for="id">Código vehículo</label>
                    <input class="form-control" placeholder="N0001" type="text" id="id" name="codigo" value={codigo} onChange={handleInputChange} />
                </div>
                <div class="mb-3" >
                    <label class="form-label" for="id">Marca</label>
                    <input class="form-control" placeholder="Nissan" type="text" id="Marca" name="marca" value={marca} onChange={handleInputChange} />
                </div>
                <div class="mb-3" >
                    <label class="form-label" for="id">Modelo</label>
                    <input class="form-control" placeholder="Perez" type="text" id="Modelo" name="modelo" value={modelo} onChange={handleInputChange} />
                </div>
                <div class="mb-3" >
                    <label class="form-label" for="id">Año</label>
                    <input class="form-control" placeholder="2010" type="number" id="Anio" name="anio" value={anio} onChange={handleInputChange} />
                </div>
                <div class="mb-3" >
                    <label class="form-label" for="id">Color</label>
                    <input class="form-control" placeholder="Negro" type="text" id="Color" name="color" value={color} onChange={handleInputChange} />
                </div>
                <div class="mb-3" >
                    <label class="form-label" for="id">Precio</label>
                    <input class="form-control" placeholder="1200000" type="number" id="Precio" name="precio" value={precio} onChange={handleInputChange} />
                </div>
                {/* activa o desactiva los botones según el estado "null=nulo" de del componente "autoEditado" */}
                {autoEditado !== null ? (
                    <button
                        type="button"
                        class="btn btn-success"
                        onClick={() => carEdit(auto)}
                    >
                        Editar Auto
                    </button>
                ) : (
                    <button
                        type="button"
                        class="btn btn-success"
                        onClick={() => carAdd(auto)}
                    >
                        Ingresar Auto
                    </button>
                )}
                {autoEditado !== null ? (
                    <button
                        type="button"
                        class="btn btn-danger"
                        onClick={() => setAutoEditado(null)}
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

export default CarFormComponent;