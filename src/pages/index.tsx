import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from "./Home";
import Header from "../components/Header";

const Routing = () => {
    return (
        <div className="scrollbar">
            <Header/>
            <main>
                <Routes>
                    <Route path={"/home"} element={<Home/>}/>
                </Routes>
            </main>
        </div>
    );
};

export default Routing;