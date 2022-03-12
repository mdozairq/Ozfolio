import React from "react";
import Card from "./Card";
import Footer from "./Footer";
import projectData from "./projectData";


const cardContainer = {
    display:"flex",
    flexWrap : "wrap",
    justifyContent : "space-evenly",
    alignItems : "space-evenly",
    height : "auto",
}

const Project = () =>{
    return(
        <>
                <div id="headers" className="my-5">
                    <h1 className="text-center brand-name">Projects</h1>
                </div>
                <div className="container-fluid mb-5">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div style={cardContainer}>
                                {
                                    projectData.map((val, ind)=>{
                                        return <Card key={ind} imgsrc={val.imgsrc} title={val.title} description={val.description} repolink={val.repolink} livelink={val.livelink} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                    <Footer/>
                    </div>
                </div>
        </>
    );
};

export default Project;