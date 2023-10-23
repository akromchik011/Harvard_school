import React from "react";
import "./map.css";
function Map() {
  return (
    <div className="map-main">
      <h1 className="location" data-aos="fade-up">
        Bizning manzilimiz
      </h1>
      <div className="map-left" data-aos="zoom-in">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d638.4517782416883!2d72.35401359960697!3d40.76047044034725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sru!2s!4v1697966206817!5m2!1sru!2s"></iframe>
      </div>
    </div>
  );
}

export default Map;
