import React from "react";
import useAuth from "../../Hooks/useAuth";
import './Booking.css'
import img from '../../images/order.png'

const Booking = () => {
    const { user } = useAuth();
    return (
        <div>
            <div className="container my-5">
                <div className="text-center mb-4">
                    <h6 style={{ color: "#1c63b8" }} className="fw-bold">
                        Welcome to {user.displayName}
                    </h6>
                    <h1 style={{ color: "#0b2154" }}>
                        Successfully Ordered Your Service
                    </h1>
                    <div>
                        <img
                            src={img}
                            className="w-75 p-5 notFound-img"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
