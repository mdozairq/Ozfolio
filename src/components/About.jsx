import React from "react";
import webx from "../images/profile.png";
import Footer from "./Footer";

const About = () => {
    return (
        <>
            <section id="header" className="display-flex align-items-center">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row" >
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <img src={webx} className="img-fluid Animated profile" alt="profile" />
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <h1><strong className="brand-name">About Me</strong></h1>
                                    <h2 className="my-4">Summary</h2>
                                    <p>I am an undergraduate student deeply intrested in problem-solving with algorithms and a passion for Webdevelopment. I'm a B.Tech Computer Science student from Gaya College of Engineering, Gaya with strong core computer science knowledge of Operating Systems, Data Structures and Algorithms.</p>
                                    <h2 className="my-4">Skills </h2>
                                    <div className="d-flex icons">
                                        <p align="left"> <a  href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="60" height="60" /> </a> <a href="https://www.w3schools.com/cpp/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="cplusplus" width="60" height="60" /> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="60" height="60" /> </a> <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="60" height="60" /> </a> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="60" height="60" /> </a> <a href="https://heroku.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" width="60" height="60" /> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="60" height="60" /> </a> <a href="https://www.java.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="60" height="60" /> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="60" height="60" /> </a> <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="60" height="60" /> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="60" height="60" /> </a> <a href="https://www.python.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="60" height="60" /> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="60" height="60" /> </a> </p>
                                    </div>
                                    <h2 className="my-4">Achievements</h2>
                                    <ul>
                                        <li><em>3★ Competitive Programmer at CodeChef : </em> <a href="https://www.codechef.com/users/mdozairq">Max rated : 1617 </a></li>
                                        <li><em>First Prize winner of the Hackathon on AI and ML Training program
                                                organized by Edge FX Technologies Private Limited.</em></li>
                                        <li><em>Hacker rank 5★ in C++ and 3★ in Problem Sloving
                                            certified:</em> 
                                            <a href="https://www.hackerrank.com/mdozairq" target="_blank" rel="noreferrer" >Achivements</a></li>
                                    </ul>
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

export default About;