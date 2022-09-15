import React from 'react';
import './home.scss';
import Calculations from "./Calculations";
import Calendar from "./Calendar";

const Home = () => {
    return (
        <section className={"home"}>
            <div className="container">
                <div className="home__row">
                    <Calculations/>
                    <Calendar/>
                </div>
            </div>
        </section>
    );
};

export default Home;