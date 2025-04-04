
import React from 'react';
import OutsideHotelImages1 from "../../assets/Images/Outside_of_hotels/outside1.jpg";
import OutsideHotelImages2 from "../../assets/Images/Outside_of_hotels/outside2.jpg";
import OutsideHotelImages3 from "../../assets/Images/Outside_of_hotels/outside3.jpg";
import OutsideHotelImages4 from "../../assets/Images/Outside_of_hotels/outside4.jpg";
import OutsideHotelImages5 from "../../assets/Images/Outside_of_hotels/outside5.jpg";
import Carousel1 from '../BodyFile/Carousel_component';
import Styles from '../CSSFile/Home.module.css';

// dynamically fetch images

const Images = [OutsideHotelImages1,OutsideHotelImages2,OutsideHotelImages3,OutsideHotelImages4,OutsideHotelImages5]; //create array
const Home = ()=>{
    return (
        <>
        <div className={Styles.HomeContainer}>
            <Carousel1 Hotel_images ={Images}/>
        </div>
        </>
    )

};

export default Home;