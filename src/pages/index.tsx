import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from "./Home";

const Routing = () => {
    return (
        <>
            <main>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                </Routes>
            </main>
        </>
    );
};

export default Routing;