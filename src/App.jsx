import React from "react";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";

const App = () => {
    return (
        <>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/education" component={Education} />
                <Route exact path="/project" component={Project} />
                <Route exact path="/experience" component={Experience} />
                <Redirect to="/" />
            </Switch>
        </>
    );
};

export default App;