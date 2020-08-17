import React from "react";
import "./Banner.css";

function Banner({source ,link}) {
  const gotoSite = () => {
    window.location.href = link
  }

  return (
    <div id="banner">
      <img onClick={gotoSite} src={source} alt="banner" />
    </div>
  );
}

export default Banner;
