import React, { useCallback, useState } from "react"; //"Hooks", callback: devuelve una función a su referencia previa (para nuestro caso lo utilizamos como un "volver atrás"), State: retorna el valor actual y el que actualizará a través de un array[2]. 
import { CarFormComponent } from "../components"; //importa el formulario de auto
import ButtonUser from "../components/ButtonUser"; //importa el botón previamente creado (botón universal - dinámico)
import TableCar from "../components/TableCar" //importa la tabla de auto
import { useNavigate } from "react-router-dom"; //conecta la navegación de la página "Auto" a través de /Auto en la dirección web.
//importaciones del botón switch - MUI REACT
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import Switch from '@mui/material/Switch';

// función que crea los "autos" que se muestran por defecto en la tabla auto
const auto = [{
    codigo: "1",
    marca: "Nissan",
    modelo: "V16",
    anio: "2010",
    color: "Negro",
    precio: "1200000"
}, {
    codigo: "2",
    marca: "Toyota",
    modelo: "Tercel",
    anio: "2008",
    color: "Gris",
    precio: "1300000"
}]



//función que engloba todo los componentes utilizados en la página de "auto"
const AutoPage = () => {
    //Navegación de la página
    const navigate = useNavigate();
    //cuando se clickea sobre el componente devuelve a la navegación referenciada previamente.
    const handleOnClick = useCallback(() => navigate("/", {}, [navigate]))
    //función con los valores de auto (actual y por el cual se actualizará)
    const [car, setState] = useState(auto);
    const [autoEditado, setAutoEditado] = useState(null);

    //elimina el auto
    const carDelete = (codigoAuto) => {
        const changeCar = car.filter(auto => auto.codigo != codigoAuto);
        setState(changeCar)
    }

    //añade el auto
    const carAdd = (auto) => {
        const addAuto = [
            ...car, auto
        ]
        setState(addAuto);
    }

    //edita el auto
    const carEdit = (autoEditado) => {
        //Importante recordar que el map recorre nuestro componente auto. En este caso, compara nuestro parametro a editar según el valor asignado (código), si el parámetro coincide con la función... se actualiza el dato.
        const editCar = car.map(auto => (auto.codigo === autoEditado.codigo ? autoEditado : auto))

        setState(editCar);
    }
    //Código de MUI para la integración correcta de nuestro Switch.
    const GreenSwitch = styled(Switch)(({ theme }) => ({
        '& .MuiSwitch-switchBase.Mui-checked': {
            color: pink[600],
            '&:hover': {
                backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
            },
        },
        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
            backgroundColor: pink[600],
        },
    }));

    const label = { inputProps: { 'aria-label': 'Color switch demo' } };





    return (
        <div>
            {/* Se pasan los parámetros para cada componente, sino, nuestras propiedades no interactuarán con nuestros componentes */}
            <h2 >Bienvenido/a: <h6>Este es un Switch: <GreenSwitch {...label} defaultChecked /></h6> </h2>
            <br></br><br></br>
            <CarFormComponent carAdd={carAdd} autoEditado={autoEditado} setAutoEditado={setAutoEditado} carEdit={carEdit} />
            <TableCar autos={car} deleteCar={carDelete} setAutoEditado={setAutoEditado} />
            <br></br>
            <ButtonUser infoBoton={"Ir a usuarios"} handleOnClick={handleOnClick} />





        </div>
    )
}
export default AutoPage;