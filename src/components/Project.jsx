import React from "react";
import Card from "./Card";
import Footer from "./Footer";
import projectData from "./projectData";

const Project = () =>{
    return(
        <>
                <div id="headers" className="my-5">
                    <h1 className="text-center brand-name">Projects</h1>
                </div>
                <div className="container-fluid mb-5">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row gy-4">
                                {
                                    projectData.map((val, ind)=>{
                                        return <Card key={ind} imgsrc={val.imgsrc} title={val.title} description={val.description} repolink={val.repolink} livelink={val.livelink} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
        </>
    );
};

export default Project;