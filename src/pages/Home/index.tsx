import React from 'react';
import './home.scss';
import Calculations from "./Calculations";
import Calendar from "./Calendar";
import HeaderDown from "../../components/Header/HeaderDown/HeaderDown";

const Home = () => {
    return (
        <>
            <HeaderDown/>
            <section className={"home"}>
                <div className="container">
                    <div className="home__row">
                        <Calculations/>
                        <Calendar/>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;