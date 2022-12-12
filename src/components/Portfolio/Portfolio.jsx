import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/project1.png";
import Ecommerce from "../../img/project2.png";
import HOC from "../../img/project3.png";
import MusicApp from "../../img/project4.png";
import { themeContext } from "../../Context";
import { Link } from "react-scroll";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" /><br />
          <a href="https://book-mart-3e60d.web.app/"><button className="p-button">Visit site</button></a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" /><br />
          <a href="https://photography-client-2.web.app/#slide2"><button className="p-button">Visit site</button></a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" /><br />
          <a href="https://edu-learn-hero.web.app/?fbclid=IwAR0fgwSjBrI-xeqnN5p41wO7drAyQHxACoO4dcaUERKUwmq-a38l99KvBEY"><button className="p-button">Visit site</button></a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" /><br />
          <a href="https://mellifluous-fudge-e840bc.netlify.app/"><button className="p-button">Visit site</button></a>
        </SwiperSlide>
      </Swiper>

    </div>
  );
};

export default Portfolio;
