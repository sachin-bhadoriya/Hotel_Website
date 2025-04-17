
import React from 'react';
import OutsideHotelImages1 from "../../assets/Images/Outside_of_hotels/outside11.jpg";
import OutsideHotelImages8 from "../../assets/Images/Outside_of_hotels/outside10.jpg";
import OutsideHotelImages7 from "../../assets/Images/Outside_of_hotels/outside9.jpg";
import OutsideHotelImages4 from "../../assets/Images/Outside_of_hotels/outside8.jpg";
import OutsideHotelImages6 from "../../assets/Images/Outside_of_hotels/outside7.jpg";
import Carousel1 from '../BodyFile/Carousel_component';
import Styles from '../CSSFile/Home.module.css';
import Introduction from '../Introduction';
import FAQ from './FAQ';
import Service from './Service';
import Consultation from '../JSXFile/Consultation';

// dynamically fetch images

const Images = [OutsideHotelImages1,OutsideHotelImages8,OutsideHotelImages7,OutsideHotelImages4,OutsideHotelImages6]; //create array
const Home = ()=>{
    return (
        <>
        <div className={Styles.HomeContainer}>
            <div className ={Styles.Carouselcss}>
            <Carousel1 Hotel_images ={Images}/>
            </div>
        </div>
        <Introduction/>
        {/* <FAQ /> */}
        <Service />
        <Consultation />
        </>
    )

};

export default Home;