import React from "react";
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

function formatAge(user) {
    return user.age;
}

const user = {
    firstName: "Marco",
    lastName: "Povea",
    age: "27"
};
const App = () => {
    return <h1>
        Hola, {formatName(user)} tu edad equivale a {formatAge(user)} !
    </h1>
}
export default App;



