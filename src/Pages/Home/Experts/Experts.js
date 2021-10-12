import React from "react";
import { Row } from "react-bootstrap";

import mechanic1 from "../../../images/mechanic/mechanic-1.jpg";
import mechanic2 from "../../../images/mechanic/mechanic-2.jpg";
import mechanic3 from "../../../images/mechanic/mechanic-3.jpg";
import mechanic4 from "../../../images/mechanic/mechanic-4.jpg";
import Expert from "../Expert/Expert";

const experts = [
    {
        img: mechanic1,
        name: "Andrew Smith",
        expertize: "-Engine Expert-",
        experence:
            "Took the car in to have a noisy engine checked. They did a thorough check, found nothing untoward and, for good measure, updated all the engine management softwares. End result no cost. Brilliant!",
    },
    {
        img: mechanic2,
        name: "John Anderson",
        expertize: "-Polish Expert-",
        experence:
            "I’ve been using this garage for a number of years to service both our cars. They are really good, they always have a slot available, work fast and have good prices. Would recommend them without reservations.",
    },
    {
        img: mechanic3,
        name: "Zakaria Smith",
        expertize: "-Coloring Expert-",
        experence:
            "This is the second time I have used Quality Car Service and their service is great. Very polite staff who genuinely seem to care about your experience. Competitive pricing matched with this level of customer service!",
    },
    {
        img: mechanic4,
        name: "Sakib Anderson",
        expertize: "-Alrounder Expert-",
        experence:
            "Took the car in to have a noisy engine checked. They did a thorough check, found nothing untoward and, for good measure, updated all the engine management softwares. End result no cost. Brilliant!",
    },
];

const Experts = () => {
    return (
        <div className="mb-5">
            <div className="container">
                <div className="text-center">
                    <h1 className="services-heding">OUR EXPERTS</h1>
                    <hr className="dotted-hr mb-3" />
                    <p>
                        Our commitment to you is to provide honest, friendly,
                        and on-time service. Visit a locally owned and operated
                        business that has been serving the community since 1992.
                    </p>
                </div>
                <div>
                    <Row xs={1} md={2} lg={4} className="g-4 mt-3">
                        {experts.map((expert) => (
                            <Expert key={expert.name} expert={expert} />
                        ))}
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Experts;
