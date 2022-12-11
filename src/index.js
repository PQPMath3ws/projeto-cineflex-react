import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";

import reportWebVitals from './reportWebVitals';

import Navbar from './components/Navbar';

import BookTicket from './routes/BookTicket';
import Finish from "./routes/Finish";
import Movies from "./routes/Movies";
import Sessions from './routes/Sessions';

import Global from "./styles/Global";
import Reset from "./styles/Reset";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <HashRouter>
            <Reset></Reset>
            <Global></Global>
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Movies></Movies>}></Route>
                <Route path="/bookTicket/:id" element={<BookTicket></BookTicket>}></Route>
                <Route path="/finish" element={<Finish></Finish>}></Route>
                <Route path="/sessions/:id" element={<Sessions></Sessions>}></Route>
            </Routes>
        </HashRouter>
    </React.StrictMode>
);

reportWebVitals();
