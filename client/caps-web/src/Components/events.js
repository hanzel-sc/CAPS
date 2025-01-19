import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "./events.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Events() {
  const [selectedCategory, setSelectedCategory] = useState("upcomingEvents");
  const [eventImages, setEventImages] = useState([]);

  useEffect(() => {
    fetch("./data/events.json")
      .then((response) => response.json())
      .then((data) => setEventImages(data[selectedCategory]));
  }, [selectedCategory]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    lazyload: "ondemand",
    adaptiveHeight: false
  };

  return (
    <div id="events-section" className="events-section">
      <h2>Events</h2>
      <div className="buttons">
        <button
          onClick={() => setSelectedCategory("pastEvents")}
          className={selectedCategory === "pastEvents" ? "active" : ""}
        >
          Past Events
        </button>
        <button
          onClick={() => setSelectedCategory("upcomingEvents")}
          className={selectedCategory === "upcomingEvents" ? "active" : ""}
        >
          Upcoming Events
        </button>
      </div>
      <div className="carousel-container">
        {eventImages.length > 0 ? (
          <Slider {...settings}>
            {eventImages.map((event) => (
              <div key={event.id} className="carousel-item">
                <img src={event.image} alt={event.title} />
                <p>{event.title}</p>
              </div>
            ))}
          </Slider>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Events;
