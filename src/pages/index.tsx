import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from "./Home";
import Header from "../components/Header";

const Routing = () => {
    return (
        <>
            <Header/>
            <main>
                <Routes>
                    <Route path={"/home"} element={<Home/>}/>
                </Routes>
            </main>
        </>
    );
};

export default Routing;