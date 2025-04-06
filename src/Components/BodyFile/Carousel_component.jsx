
import {useState,useEffect} from 'react';
import Styles from '../BodyCssFile/Carousel_component.module.css';
import Himage1 from '../../assets/Images/Outside_of_hotels/outside1.jpg';
//use carousel using package 
// give the hotel_image through prop
const Carousel_component = ({Hotel_images}) => {
    const [Current,setCurrent] = useState(0);    // to count image index
   
    const [AutoPlay,setAutoPlay] = useState(true);
    let timeout = null;
    useEffect(()=>{ 
        timeout = AutoPlay && setTimeout(() => {
            handleNextImage();
        }, 2500);
        return()=>clearTimeout(timeout);
    },[AutoPlay, Current])  //Add current to dependencies
    // go to Next Image on click  Right Arrow
    const handleNextImage = ()=>{   
        setCurrent((next) => (next === Hotel_images.length - 1 ? 0 : next + 1));  
    };

    const handlePrevImage=()=>{
        setCurrent((prev) => (prev === 0 ? Hotel_images.length - 1 : prev - 1));
    };
    return (
        <>
        <div 
        className={Styles.carousel_container} 
        onMouseEnter={()=>setAutoPlay(false)} 
        onMouseLeave={()=>setAutoPlay(true)}>
            <div className={Styles.carousel_wrapper}>
                {Hotel_images.map((image,index)=>{
                    return(
                        <div
                        key={index}
                        className={index === Current ? `${Styles.carousel_card} ${Styles.carousel_card_active}` : Styles.carousel_card}
                        >
                            <img className={Styles.carousel_image} src={image} alt="hotel image" />
                           
                        </div>
                       
                    )
                })}
                    <div className={Styles.carousel_arrow}>
                        <div className={Styles.right_arrow} onClick={handleNextImage}>&rsaquo;</div>
                        <div className={Styles.left_arrow} onClick={handlePrevImage}>&lsaquo;</div>
                    </div>
                    {/* //pagination */}
                    <div className={Styles.carousel_pagination}>    
                        {Hotel_images.map((_, index)=>{
                            return(
                                <div
                                key={index}
                                className={
                                    index === Current ?`${Styles.pagination_dots} ${Styles.pagination_dots_active}`: Styles.pagination_dots
                                }
                                onClick={()=>setCurrent(index)}
                                ></div>
                            );

                        })}
                    </div>
            </div>
                

        </div>
          
        </>
    );

};
export default Carousel_component;