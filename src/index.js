import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import reportWebVitals from './reportWebVitals';

import Navbar from './components/Navbar';
import Reset from "./styles/Reset";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Reset></Reset>
            <Navbar></Navbar>
            <Routes>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
