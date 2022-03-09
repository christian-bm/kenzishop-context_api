import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import Providers from "./Providers";
import GlobalStyles from "./styles/global";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Providers>
                <GlobalStyles />
                <App />
            </Providers>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
