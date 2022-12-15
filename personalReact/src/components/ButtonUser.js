//importamos react solo si lo ocuparemos dentro de este archivo ".js"
import React from "react";
//creamos el componente del botón,al cual se le darán dos propiedades "infoBoton y handleOnClick"
//infoBoton: actualmente, lo estamos usando para discriminar el mensaje que tendrá el botón (brindar botón dinámico)
//handleOnClick: Acción determinada a realizar luego de hacer click con el mouse sobre el botón.
const ButtonUser = ({ infoBoton, handleOnClick }) => {
    return (
        <div class="container">
            {/*  "outline":solo le agregué esta clase para mostrar al botón sin relleno de color. */}
            <button type="submit" class="btn btn-outline-primary btn-block mb-4"
                onClick={() => {
                    handleOnClick();
                }}
            >{infoBoton}</button>
        </div>
    )

};
//le damos salida al componente, a fin de ocuparlo fuera de este archivo ".js", siempre y cuando esté dentro de nuestro proyecto.
export default ButtonUser;