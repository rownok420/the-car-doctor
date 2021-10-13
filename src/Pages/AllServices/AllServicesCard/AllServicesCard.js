import React from "react";
import img1 from "../../../images/services/a.png";
import img2 from "../../../images/services/b.png";
import img3 from "../../../images/services/c.png";
import "./AllServicesCard.css";

const AllServicesCard = () => {
    return (
        <div>
            <div className="Container my-5">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                    <div className="col">
                        <div className="card h-auto card-1 card-hover pb-4">
                            <img
                                src={img1}
                                width="80px"
                                height="83px"
                                className="m-auto mt-5 mb-4"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title text-center">
                                    Quality Servicing
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-auto card-2 card-hover pb-4">
                            <img
                                src={img2}
                                width="80px"
                                height="83px"
                                className="m-auto mt-5 mb-4"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title text-center">
                                    Expert Members
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-auto card-3 card-hover pb-4">
                            <img
                                src={img3}
                                width="80px"
                                height="83px"
                                className="m-auto mt-5 mb-4"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title text-center">
                                    Modern Equipment
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-auto card-4 card-hover pb-4">
                            <img
                                src={img1}
                                width="80px"
                                height="83px"
                                className="m-auto mt-5 mb-4"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title text-center">
                                    Vaccume Cleaning
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllServicesCard;
