import React from "react";
import "./Payment.scss";
import paypal from "../../assets/images/paypal.jpg";
import masterCard from "../../assets/images/mastercard.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Payment = () => {
    let masterCardSaved = "**** **** **** 4 3 2 2";
    let payPalSaved = "paypal*****il@gmail.com";
    const navigate = useNavigate();
    return (
        <div className="payment-cont">
            <div className="top">
                <p
                    onClick={() => {
                        navigate("/home");
                    }}
                    className="arrow"
                >
                    <FontAwesomeIcon className="icon" icon={faChevronLeft} />
                </p>
                <p className="title">Payment method</p>
            </div>
            <div className="cards-top">
                <div className="card">
                    <img src={masterCard} alt="" />
                    <input type="text" value={masterCardSaved} />
                </div>
                <div className="card">
                    <img src={paypal} alt="" />
                    <input type="text" value={payPalSaved} />
                </div>
            </div>
            <div className="new-card">
                <p className="new-card-txt">Add new card</p>
                <input
                    className="card-info"
                    type="text"
                    placeholder="Card name"
                />
                <input
                    className="card-info"
                    type="text"
                    placeholder="Card number"
                />
                <div className="card-secure">
                    <input
                        className="card-sec"
                        type="text"
                        placeholder="Expires"
                    />
                    <input className="card-sec" type="text" placeholder="CVV" />
                </div>
            </div>
            <button className="save-btn">Save</button>
        </div>
    );
};

export default Payment;
