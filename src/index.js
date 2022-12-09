import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import reportWebVitals from './reportWebVitals';

import Navbar from './components/Navbar';

import Movies from "./routes/Movies";
import Sessions from './routes/Sessions';

import Global from "./styles/Global";
import Reset from "./styles/Reset";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Reset></Reset>
            <Global></Global>
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Movies></Movies>}></Route>
                <Route path="/sessions/:id" element={<Sessions></Sessions>}></Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
