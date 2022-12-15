import React, { useCallback } from "react";
import { CarFormComponent } from "../components";
import ButtonUser from "../components/ButtonUser";
import TableCar from "../components/TableCar"
import { useNavigate } from "react-router-dom";
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import Switch from '@mui/material/Switch';






const AutoPage = () => {
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate("/", {}, [navigate]))
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
            <h2>Bienvenido/a: </h2>
            <br></br><br></br>
            <CarFormComponent />
            <ButtonUser infoBoton={"Agregar Auto"} handleOnClick={handleOnClick} />
            <br></br>
            <TableCar />
            <Switch {...label} defaultChecked color="default" />
            <GreenSwitch {...label} defaultChecked />



        </div>
    )
}
export default AutoPage;