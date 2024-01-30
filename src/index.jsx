import React from "react";
import { ReactDOM } from "react-dom/client";
import Aplication from "./Aplication";

class App extends React.Component {
    render() {
        return (
            <h1>hello world</h1>
        );
    } 
}

var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App></App>);