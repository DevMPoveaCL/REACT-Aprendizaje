import React from "react";

const TableCar = () => {
    return (
        <div class="container-fluid">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Marca</th>
                        <th scope="col">Modelo</th>
                        <th scope="col">Año</th>
                        <th scope="col">Color</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Nissan</td>
                        <td>V16</td>
                        <td>2010</td>
                        <td>Negro</td>
                        <td>1.200.000</td>
                        <td>
                            <button
                                type="button"
                                class="btn btn-link btn-rounded btn-sm fw-bold"
                                data-mdb-ripple-color="dark"
                            >
                                Edit
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Toyota</td>
                        <td>Tercel</td>
                        <td>1997</td>
                        <td>Gris</td>
                        <td>1.200.000</td>
                        <td>
                            <button
                                type="button"
                                class="btn btn-link btn-rounded btn-sm fw-bold"
                                data-mdb-ripple-color="dark"
                            >
                                Edit
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Susuki</td>
                        <td>Swift</td>
                        <td>2020</td>
                        <td>Azul</td>
                        <td>4.000.000</td>
                        <td>
                            <button
                                type="button"
                                class="btn btn-link btn-rounded btn-sm fw-bold"
                                data-mdb-ripple-color="dark"
                            >
                                Edit
                            </button>
                        </td>
                    </tr>


                </tbody>
            </table>
        </div>
    );
}
export default TableCar;