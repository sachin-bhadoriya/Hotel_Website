import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
//use carousel using package 
const Carousel_component = ({Hotel_images}) => {
    return(
        <>
        {/* carousel image dynamically */}
            <Carousel 
           autoplay 
           infiniteLoop 
           interval={3000} // Set the interval for autoplay (in milliseconds)
           showThumbs={false} // Optional: Hide thumbnails
           showStatus={false} // Optional: Hide status indicators
       >
            {Hotel_images.map((image, index) => (
                    <div key={index} className="carousel-item">
                        <img src={image} alt={`Hotel ${index + 1}`} />
                       
                    </div>
            ))}
            
           
            </Carousel>
        </>
    );

};
export default Carousel_component;