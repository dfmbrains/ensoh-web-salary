import React from 'react';
import './home.scss';
import Calculations from "./Calculations";
import HeaderDown from "../../components/Header/HeaderDown/HeaderDown";
import CalendApp from "../../components/Calendar/Calendar";


const Home = () => {
    return (
        <>
            <HeaderDown/>
            <section className={"home"}>
                <div className="container">
                    <div className="home__row">
                        <Calculations/>
                        <CalendApp/>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;