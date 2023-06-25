import React from "react";
import "./Profile.scss";
import profile from "../../assets/images/profile.jpg";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
const Profile = () => {
    const navigate = useNavigate();

    return (
        <div className="prof-cont">
            <div className="top">
                <p
                    onClick={() => {
                        navigate("/account");
                    }}
                    className="back"
                >
                    <FontAwesomeIcon icon={faChevronLeft} />
                </p>
                <p className="prof">Profile</p>
            </div>
            <div className="profile-pict">
                <img className="picture" src={profile} alt="" />
            </div>
            <div className="each-toDo">
                <p className="title">Jenny Wilson</p>
                <p className="edit">
                    <FontAwesomeIcon icon={faPenToSquare} />
                </p>
            </div>
            <div className="each-toDo">
                <p className="title">jenny@gmail.com</p>
                <p className="edit">
                    <FontAwesomeIcon icon={faPenToSquare} />
                </p>
            </div>
            <div className="each-toDo">
                <p className="title">+1 903 354 43 43</p>
                <p className="edit">
                    <FontAwesomeIcon icon={faPenToSquare} />
                </p>
            </div>
            <div className="each-toDo">
                <p className="title">03 05 1995</p>
                <p className="edit">
                    <FontAwesomeIcon icon={faPenToSquare} />
                </p>
            </div>
            <button className="save-button">Save</button>
        </div>
    );
};

export default Profile;
