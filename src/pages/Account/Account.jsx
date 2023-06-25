import React from "react";
import "./Account.scss";
import profile from "../../assets/images/profile.jpg";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
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
                        <img src="" alt="" />
                        <p className="title">Account edit</p>
                        <p className="arrow">
                            <FontAwesomeIcon icon={faChevronRight} />
                        </p>
                    </div>
                </Link>
                <Link>
                    <div className="each-toDo">
                        <img src="" alt="" />
                        <p className="title">Notifications</p>
                        <p className="arrow">
                            <FontAwesomeIcon icon={faChevronRight} />
                        </p>
                    </div>
                </Link>
                <Link>
                    <div className="each-toDo">
                        <img src="" alt="" />
                        <p className="title">Payment</p>
                        <p className="arrow">
                            <FontAwesomeIcon icon={faChevronRight} />
                        </p>
                    </div>
                </Link>
                <Link>
                    <div className="each-toDo">
                        <img src="" alt="" />
                        <p className="title">Language</p>
                        <p className="arrow">Eng</p>
                    </div>
                </Link>
                <Link>
                    <div className="each-toDo">
                        <img src="" alt="" />
                        <p className="title">Location</p>
                        <p className="arrow">
                            <FontAwesomeIcon icon={faChevronRight} />
                        </p>
                    </div>
                </Link>
                <Link>
                    <div className="each-toDo">
                        <img src="" alt="" />
                        <p className="title">FAQ</p>
                        <p className="arrow">
                            <FontAwesomeIcon icon={faChevronRight} />
                        </p>
                    </div>
                </Link>
                <Link>
                    <div className="each-toDo">
                        <img src="" alt="" />
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
