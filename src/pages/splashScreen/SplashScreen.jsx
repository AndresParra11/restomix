import React, { useState } from "react";
import today from "../../assets/images/today.jpg";
import person from "../../assets/images/person.jpg";
import rest1 from "../../assets/images/rest1.jpg";
import rest2 from "../../assets/images/rest2.jpg";
import "./SplashScreen.scss";
import Footer from "../../components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStar,
    faLocationDot,
    faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

const SplashScreen = () => {
    let rate = 5;
    const [foodType, setFoodType] = useState("all");
    function rateStars() {
        let stars = [];
        for (let i = 0; i < rate; i++) {
            stars[i] = <FontAwesomeIcon icon={faStar} />;
        }
        return stars;
    }
    function chnageFood(food) {
        setFoodType(food);
    }
    return (
        <div className="home-container">
            <Footer />
            <div className="inner">
                <div className="ubication">
                    <FontAwesomeIcon className="icon" icon={faLocationDot} />
                    <div>
                        <p className="up">AaaAaa</p>
                        <p className="down">
                            882 Well St. New-York{" "}
                            <FontAwesomeIcon
                                className="icon-down"
                                icon={faChevronDown}
                            />{" "}
                        </p>
                    </div>
                </div>
                <div className="carousel">
                    <img src={today} alt="" />
                    <img src={person} alt="" />
                </div>
                <div className="restaurants">
                    <p className="title">Restaurants and Cafes</p>
                    <div className="filter-buttons">
                        <button
                            onClick={() => {
                                chnageFood("all");
                            }}
                            className={`each-food ${
                                foodType === "all" && "active"
                            }`}
                        >
                            All
                        </button>
                        <button
                            onClick={() => {
                                chnageFood("fast");
                            }}
                            className={`each-food ${
                                foodType === "fast" && "active"
                            }`}
                        >
                            Fast Food
                        </button>
                        <button
                            onClick={() => {
                                chnageFood("pizza");
                            }}
                            className={`each-food ${
                                foodType === "pizza" && "active"
                            }`}
                        >
                            Pizza
                        </button>
                        <button
                            onClick={() => {
                                chnageFood("salat");
                            }}
                            className={`each-food ${
                                foodType === "salat" && "active"
                            }`}
                        >
                            Salates
                        </button>
                    </div>
                    <div className="rest-cards">
                        <div className="each-rest">
                            <img className="rest-img" src={rest1} alt="" />
                            <div>
                                <p className="name"> Pardes Restaurant</p>
                                <div className="rate">{rateStars()}</div>
                                <p className="work-time">
                                    Work time 10:00 - 23:00
                                </p>
                                <p className="price">Before you $50</p>
                            </div>
                        </div>
                        <div className="each-rest">
                            <img className="rest-img" src={rest2} alt="" />
                            <div>
                                <p className="name">Glamour Kafe</p>
                                <div className="rate">{rateStars()}</div>
                                <p className="work-time">
                                    Work time 08:00 - 20:00
                                </p>
                                <p className="price">Before you $45</p>
                            </div>
                        </div>
                        <div className="each-rest">
                            <img className="rest-img" src={rest1} alt="" />
                            <div>
                                <p className="name">Aromat Bakery</p>
                                <div className="rate">{rateStars()}</div>
                                <p className="work-time">
                                    Work time 07:00 - 20:00
                                </p>
                                <p className="price">Before you $55</p>
                            </div>
                        </div>
                        <div className="each-rest">
                            <img className="rest-img" src={rest1} alt="" />
                            <div>
                                <p className="name">
                                    Last night Restaurant & kafe
                                </p>
                                <div className="rate">{rateStars()}</div>
                                <p className="work-time">
                                    Work time 09:00 - 23:00
                                </p>
                                <p className="price">Before you $20</p>
                            </div>
                        </div>
                        <div className="each-rest">
                            <img className="rest-img" src={rest2} alt="" />
                            <div>
                                <p className="name">Restaurant Sky</p>
                                <div className="rate">{rateStars()}</div>
                                <p className="work-time">
                                    Work time 10:00 - 22:00
                                </p>
                                <p className="price">Before you $35</p>
                            </div>
                        </div>
                        <div className="each-rest">
                            <img className="rest-img" src={rest1} alt="" />
                            <div>
                                <p className="name">Restaurant the Friends</p>
                                <div className="rate">{rateStars()}</div>
                                <p className="work-time">
                                    Work time 09:00 - 23:00
                                </p>
                                <p className="price">Before you $40</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SplashScreen;
