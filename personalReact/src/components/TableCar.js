//importamos react solo si lo ocuparemos dentro de este archivo ".js"
import React from "react";

//componente asociado a la tabla de auto y sus propiedades.
const TableCar = ({ autos, deleteCar, setAutoEditado }) => {
    return (
        <div class="card container mb-2">
            <h2>Tabla Autos</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th>
                            Código
                        </th>
                        <th>
                            Marca
                        </th>
                        <th>
                            Modelo
                        </th>
                        <th>
                            Año
                        </th>
                        <th>
                            Color
                        </th>
                        <th>
                            Precio
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {/* //Iteramos usuarios con .map, a cada 
                        elemento de usuarios lo llamaremos usuario y 
                            realizaremos lo siguiente => */}
                    {autos.map(auto => (
                        <tr>
                            <td>
                                {auto.codigo}
                            </td>
                            <td>
                                {auto.marca}
                            </td>
                            <td>
                                {auto.modelo}
                            </td>
                            <td>
                                {auto.anio}
                            </td>
                            <td>
                                {auto.color}
                            </td>
                            <td>
                                {auto.precio}
                            </td>
                            <td>
                                <button
                                    type="button"
                                    class="btn btn-warning"
                                    onClick={() => {
                                        setAutoEditado(auto);
                                    }}
                                >
                                    Editar
                                </button>
                                <button
                                    type="button"
                                    class="btn btn-danger"
                                    onClick={() => {
                                        deleteCar(auto.codigo);
                                    }}
                                >
                                    Eliminar
                                </button>


                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}
export default TableCar;