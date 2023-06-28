import React, { useEffect, useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import "./Slides.scss";
import { Link } from "react-router-dom";

const Slides = () => {
  const [counter, setCounter] = useState(0);
  const [slide, setSlide] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    switch (counter) {
      case 0:
        setSlide(
          "https://res.cloudinary.com/dgdogxycl/image/upload/v1687844601/Slide1_l4y769.svg"
        );
        setText(
          "Choose what to eat choosing from a variety of restaurants from the list."
        );
        break;
      case 1:
        setSlide(
          "https://res.cloudinary.com/dgdogxycl/image/upload/v1687844605/Slide2_xblhsm.svg"
        );
        setText("Choose where you want to deliver by indicating on the map.");
        break;
      case 2:
        setSlide(
          "https://res.cloudinary.com/dgdogxycl/image/upload/v1687844608/Slide3_dj8lnz.svg"
        );
        setText("We will deliver as soon as possible.");
        break;

      default:
        break;
    }
  }, [counter]);

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setCounter(newValue);
  };

  return (
    <div className="slide">
      <div className="containerInfo">
        <figure className="containerInfo__figure">
          <img src={slide} alt="slideImage" />
        </figure>
        <p className="containerInfo__text">{text}</p>
        {counter === 2 ? (
          <Link to="/SingIn">
            <button className="login">Login or Sing in</button>
          </Link>
        ) : (
          ""
        )}
      </div>
      <Box
        sx={{ width: "100%", bgcolor: "background.paper" }}
        className="slide__box"
      >
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Slide 1" className="Slides" />
          <Tab label="Slide 2" className="Slides" />
          <Tab label="Slide 3" className="Slides" />
        </Tabs>
      </Box>
    </div>
  );
};

export default Slides;
