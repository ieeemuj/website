import React from 'react';
// import styles from "../../styles/ByBadge.module.css";

const OrganizedBy = ({ by }) => {
  const styleDot = {
    backgroundColor: 'transparent',
    fontSize: '20px',
    paddingRight: '5px',
    opacity: '0.5',
    // border: "2px solid",
  };

  const styleBg = {
    color: '#000',
    margin: '0px',
    width: 'inherit',
    borderRadius: '5px',
    padding: '7px 7px',
    fontWeight: '450',
    marginLeft: '15px',
    marginTop: '15px',
    textAlign: 'left',
    position: 'absolute',
    // border: "2px solid #000",
  };

  if (by === 'CS') {
    styleDot.color = '#ffd400';
    styleBg.backgroundColor = '#f7f3a0';
  } else if (by === 'WIE') {
    styleDot.color = '#bf00ff';
    styleBg.backgroundColor = '#daa6dd';
  } else {
    styleDot.color = '#00ccff';
    styleBg.backgroundColor = '#64dff5b9';
  }
  return (
    <h5 style={styleBg}>
      <span style={styleDot}>&#9679;</span>
      IEEE
      {' '}
      {by}
      {' '}
      MUJ
    </h5>
  );
};

export default OrganizedBy;
