import React from "react";
// import styles from "../../styles/ByBadge.module.css";

const OrganizedBy = ({ by }) => {
  var style_dot = {
    backgroundColor: "transparent",
    fontSize: "20px",
    paddingRight: "5px",
    opacity: "0.5",
    // border: "2px solid",
  };

  var style_bg = {
    color: "#000",
    margin: "0px",
    width: "inherit",
    borderRadius: "5px",
    padding: "7px 7px",
    fontWeight: "450",
    marginLeft: "15px",
    marginTop: "15px",
    textAlign: "left",
    position: "absolute",
    // border: "2px solid #000",
  };

  if (by == "CS") {
    style_dot.color = "#ffd400";
    style_bg.backgroundColor = "#f7f3a0";
  } else if (by == "WIE") {
    style_dot.color = "#bf00ff";
    style_bg.backgroundColor = "#daa6dd";
  } else {
    style_dot.color = "#00ccff";
    style_bg.backgroundColor = "#64dff5b9";
  }
  return (
    <h5 style={style_bg}>
      <span style={style_dot}>&#9679;</span>
      IEEE {by} MUJ
    </h5>
  );
};

export default OrganizedBy;
