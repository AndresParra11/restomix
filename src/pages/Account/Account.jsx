import React from "react";
import "./Account.scss";
import profile from "../../assets/images/profile.jpg";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
    faGlobe,
    faLocationDot,
    faQuestion,
    faPhone,
    faToggleOff,
} from "@fortawesome/free-solid-svg-icons";
import {
    faUser,
    faBell,
    faMoneyBill1,
} from "@fortawesome/free-regular-svg-icons";
const Account = () => {
    const navigate = useNavigate();
    return (
        <div className="account-cont">
            <p
                onClick={() => {
                    navigate("/home");
                }}
                className="back"
            >
                <FontAwesomeIcon className="icon" icon={faChevronLeft} />
            </p>
            <div className="prof-data">
                <img className="picture" src={profile} alt="" />
                <p className="name">Jenny Wilson</p>
            </div>
            <div className="account-toDo">
                <Link to={"profile"}>
                    <div className="each-toDo">
                        <FontAwesomeIcon className="toDo-icon" icon={faUser} />
                        <p className="title">Account edit</p>
                        <p className="arrow">
                            <FontAwesomeIcon icon={faChevronRight} />
                        </p>
                    </div>
                </Link>
                <Link>
                    <div className="each-toDo">
                        <FontAwesomeIcon className="toDo-icon" icon={faBell} />
                        <p className="title">Notifications</p>
                        <p className="arrow">
                            <FontAwesomeIcon icon={faToggleOff} />
                        </p>
                    </div>
                </Link>
                <Link>
                    <div className="each-toDo">
                        <FontAwesomeIcon
                            className="toDo-icon"
                            icon={faMoneyBill1}
                        />
                        <p className="title">Payment</p>
                        <p className="arrow">
                            <FontAwesomeIcon icon={faChevronRight} />
                        </p>
                    </div>
                </Link>
                <Link>
                    <div className="each-toDo">
                        <FontAwesomeIcon className="toDo-icon" icon={faGlobe} />
                        <p className="title">Language</p>
                        <p className="arrow">Eng</p>
                    </div>
                </Link>
                <Link>
                    <div className="each-toDo">
                        <FontAwesomeIcon
                            className="toDo-icon"
                            icon={faLocationDot}
                        />
                        <p className="title">Location</p>
                        <p className="arrow">
                            <FontAwesomeIcon icon={faChevronRight} />
                        </p>
                    </div>
                </Link>
                <Link>
                    <div className="each-toDo">
                        <FontAwesomeIcon
                            className="toDo-icon"
                            icon={faQuestion}
                        />
                        <p className="title">FAQ</p>
                        <p className="arrow">
                            <FontAwesomeIcon icon={faChevronRight} />
                        </p>
                    </div>
                </Link>
                <Link>
                    <div className="each-toDo">
                        <FontAwesomeIcon className="toDo-icon" icon={faPhone} />
                        <p className="title">Support</p>
                        <p className="arrow">
                            <FontAwesomeIcon icon={faChevronRight} />
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Account;
