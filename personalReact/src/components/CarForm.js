import React from "react";

const CarFormComponent = () => {
    return (
        <div class="container ">
            <h3>Formulario de Auto:</h3>
            <form>

                <div class="row mb-4">
                    <div class="col">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="Marca" placeholder=""></input>
                            <label for="marca">Marca</label>

                        </div>
                    </div>
                    <div class="col">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="modelo" placeholder=""></input>
                            <label for="modelo">Modelo</label>

                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-floating">
                            <input type="number" class="form-control" id="anio" placeholder=""></input>
                            <label for="anio">Año</label>

                        </div>
                    </div>
                    <div class="col">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="color" placeholder=""></input>
                            <label for="color">Color</label>

                        </div>
                    </div>
                </div>



                <div class="form-floating mb-4">
                    <input type="number" class="form-control" id="precio" placeholder=""></input>
                    <label for="precio">Precio</label>

                </div>



            </form>
        </div>
    )

};

export default CarFormComponent;