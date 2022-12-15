import React from "react";
const ButtonUser = ({ infoBoton, handleOnClick }) => {
    return (
        <div class="container">
            <button type="submit" class="btn btn-primary btn-block mb-4"
                onClick={() => {
                    handleOnClick();
                }}
            >{infoBoton}</button>
        </div>
    )

};

export default ButtonUser;