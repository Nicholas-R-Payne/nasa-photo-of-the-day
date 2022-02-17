import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import ThemeProvider and theme
import {ThemeProvider} from 'styled-components';
import theme from './Theme'
// render ThemeProvider
ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
    ,
    document.getElementById("root")
    );
