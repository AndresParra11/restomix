import React, { useState } from "react";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
    faMagnifyingGlass,
    faHouse,
    faClock,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
    const [NavBut, setNavBut] = useState("home");
    function activate(butt) {
        setNavBut(butt);
    }
    return (
        <div className="footer-cont">
            <button
                onClick={() => {
                    activate("home");
                }}
                className="nav-btn"
            >
                <FontAwesomeIcon
                    className={`icon ${NavBut === "home" && "active"}`}
                    icon={faHouse}
                />
            </button>
            <button
                onClick={() => {
                    activate("search");
                }}
                className="nav-btn"
            >
                <FontAwesomeIcon
                    className={`icon ${NavBut === "search" && "active"}`}
                    icon={faMagnifyingGlass}
                />
            </button>
            <button
                onClick={() => {
                    activate("resent");
                }}
                className="nav-btn"
            >
                <FontAwesomeIcon
                    className={`icon ${NavBut === "resent" && "active"}`}
                    icon={faClock}
                />
            </button>
            <button
                onClick={() => {
                    activate("profile");
                }}
                className="nav-btn"
            >
                <Link to={"/account"}>
                    <FontAwesomeIcon
                        className={`icon ${NavBut === "profile" && "active"}`}
                        icon={faUser}
                    />
                </Link>
            </button>
        </div>
    );
};

export default Footer;
