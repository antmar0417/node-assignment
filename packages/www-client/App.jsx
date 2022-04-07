import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Main } from "./pages";

import { GlobalStyle } from "./globalStyles";

const container = document.getElementById("app");
const endpoint = container.getAttribute("data-endpoint");

const root = ReactDOMClient.createRoot(container);

root.render(
    <>
        <GlobalStyle />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main endpoint={endpoint} />} />
            </Routes>
        </BrowserRouter>
    </>
);
