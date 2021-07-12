import React from 'react';
import "./card_style.css";
import img1 from "./imgs/4.jpg";

function Card2(props)
{
    //var img_loc = props.img;
    var img_loc = img1;
    console.log(props.img);
    console.log("Logged");
    var style1 = {
        //height: "200px",
        height: "10.4166666vw",
        width: "inherit",
        backgroundImage: "url("+img1+")",
        backgroundSize: "100% auto",
        borderTopLeftRadius: "0.52083333vw",
        borderTopRightRadius: "0.52083333vw",
        position: "relative"
      };
      var style2 = {
          backgroundColor: "#1bc47d",
          color: "#FFFFFF",
          margin: "0px",
          width: "5.208333333vw",
          borderRadius: "0.260416666vw",
          padding: "0.364583333vw 0.364583333vw",
          fontWeight: 400,
          marginLeft: "0.52083333vw",
          marginTop: "0.52083333vw",
          position: "absolute",
          minWidth: "100px",
      };
      var style3 = {
          backgroundColor: "#587df591",
          color: "#FFFFFF",
          margin: "0px",
          width: "inherit",
          borderRadius: "0.260416666vw",
          padding: "0.364583333vw 0.364583333vw",
          fontWeight: 400,
          marginLeft: "0.78125vw",
          marginTop: "0.78125vw",
          textAlign: "left",
          position: "absolute",
      };
      var style4 = {
          color: "#4900cf",
          textDecoration: "none",
          float: "left",
          backgroundColor: "#fff",
          padding: "0.52083333vw",
          paddingLeft: "0.78125vw",
      }
      var style5 = {
        backgroundColor: "transparent",
        fontSize:"1.041666666vw",
        color:"#4900cf",
        paddingRight: "0.260416666vw",
        opacity: "0.5",
      };

    console.log(props.category);
    return (
    <>
    <div className="cards">
        <div className="card">
            {/* <img src={img1} alt="myPic" className="card__img" /> */}
            <div className="bg_img" style={style1}>
                <div className="green_tag" style={style2}>Upcoming</div>
            </div>
            <div className="card__info">
                <h5 className="card__category" style={style3}>
                         
                <span style={style5}>&#9679;</span>
                     {props.category}
                </h5>
                <br />
                <br />
                <h3 className="card__title"> {props.title} </h3>
                <h5 className="card__desc"> {props.desc} </h5>
                <div className="card_more">
                    <a href={props.more} style={style4} target="_blank">
                        Know More
                    </a>
                </div>
                <br />
            </div>
        </div>
    </div>
    </>
    );
}

export default Card2;