import React from 'react';

function Card(props) {
    return (
        <div>
            <div className="col-md-4 col-10 mx-auto">
                                    <div class="card">
                                        <img src={props.imgsrc} className="card-img-top" alt="" />
                                        <div className="card-body">
                                            <h5 className="card-title font-weight-bold">{props.title}</h5>
                                            <p className="card-text">{props.description}</p>
                                            <a href={props.repolink} className="btn btn-primary float-left">Repo Link</a>
                                            <a href={props.livelink} className="btn btn-primary float-right">Live Link</a>
                                        </div>
                                    </div>
                                </div>
        </div>
    )
}

export default Card
