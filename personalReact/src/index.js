//Importaciones
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//conexión de nuestro DOM con nuestro index.html, a través del selector llamamos al ID denominado "root" de nuestro "index.html"
ReactDOM.render(<App />, document.querySelector("#root"));