import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { useEffect, useState, useCallback } from "react";
import './Card.css';
import {
  FiberManualRecordOutlined,
  FiberManualRecordRounded,
} from "@mui/icons-material";


  const Card = ({ offerPrice, image,off, name, rating, actualPrice }) => {
  
    const [index, setIndex] = useState(0);
    const [show, setShow] = useState(false);
    const [color, setColor] = useState("lightgray");  
    var flag=0;
    
    const handleColor = ()=>{
     
      if(flag===0){
        setColor("red");
         
         flag=1;
         console.log(flag);
      }
      else if(flag===1){
        setColor("lightgray");
        flag=0;
        console.log(flag)
        
      }
    }
     
    const carousel = useCallback(() => {
      setTimeout(() => {
        if (index <image.length-1) {
          setIndex(index + 1);
        } else {
          setIndex(0);
        }
      }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index]);
  
    useEffect(() => {
      show && carousel();
    }, [show, carousel]);
  
    return (
      <div className="card">
        <div className="card_favorite">
          <button onClick={handleColor} >
            <FavoriteIcon style={{color}} />
          </button>
          
         
        </div>
  
        {/* three dot for changing image */}
  
        {Array(image.length)
          .fill()
          .map((_, i) => {
            if (i === index) {
              return show && <FiberManualRecordRounded className="dots" />;
            } else {
              return show && <FiberManualRecordOutlined className="dots" />;
            }
          })}
  
        <div className="card_image">
          <img
            onMouseOver={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            src={image[index]}
            alt="images"
          />
        </div>
        <div className="productDetail">
          <div className="card_details">
            <p className="title">{name}</p>
            
            <span className="span1">₹{offerPrice}</span>
            <span className="span2">₹{actualPrice}</span>
            <span className="span3">{off}</span>
            <span className="span4"><ShoppingCartIcon/></span>
          </div>
          <div className="card_size">
            <p>
              size <span>6,7,8,9</span>
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;