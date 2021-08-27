import React from 'react';

function Card(props) {
    return (
        <div style={{display:"flex"}}>
            <div style={{display:"flex", width:"300px", margin:"10px 10px 20px 10px"}} >
                                    <div class="card">
                                        <img src={props.imgsrc} className="card-img-top" alt="{props.title}" />
                                        <div className="card-body" style={{display:"flex", flexDirection:"column", justifyContent:"space-between"}} >
                                                <div style={{marginBottom:"10px"}}>
                                                    <h5 className="card-title font-weight-bold">{props.title}</h5>
                                                    <p className="card-text">{props.description}</p>
                                                </div>
                                                <div style={{display:"flex",justifyContent:"space-between" }}>
                                                    <a href={props.repolink} className="btn btn-primary ">View Code</a>
                                                    <a href={props.livelink} className="btn btn-secondary ">Preview</a>
                                                </div>
                                            
                                        </div>
                                    </div>
                                </div>
        </div>
    )
}

export default Card
