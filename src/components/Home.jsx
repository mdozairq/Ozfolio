import React from "react";
import { NavLink } from "react-router-dom";
import web from "../images/h-logo.jpg";
import Footer from "./Footer";

const Home = () =>{
    return(
        <>
            <section id="header" className="display-flex align-items-center">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-10 mx-auto">
                        <div className="row" >
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h1>Hello, I am <strong className="brand-name">Ozair Qayam</strong></h1>
                                <h2 className="my-3">A Passionate WebDeveloper | Programmer | Blogger | artist</h2>
                            
                            <div className="mt-3">
                                <NavLink className="btn-get-started" to="/about">get Started</NavLink>
                            </div>
                            </div>
                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                                <img src={web} className="img-fluid Animated" alt="animated"/>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <Footer/>
            </section>
        </>
    );
};

export default Home;