
// this is a header
import {Link} from 'react-router-dom'
import Styles from  '../CSSFile/Header.module.css';
import LogoImage from '../JSXFile/Logo'

const Header=()=>{
    return (
        <>           
            <header>
            <div className={Styles.container}>
                {/* This is a Header */}
                <LogoImage />
                <nav>
                <ul className={Styles.containerLink}>
                    {/* <li>
                        <Link to="/Logo">Logo</Link>
                    </li> */}
                   

                    <li>
                        <Link to="/Home"><span>Home</span></Link>
                    </li><li>
                        <Link to="/Blog"><span>Blog</span></Link>
                    </li><li>
                        <Link to="/Pages"><span>Pages</span></Link>
                    </li><li>
                        <Link to="/Rooms"><span>Rooms</span></Link>
                    </li><li>
                        <Link to ="/AboutUs"><span>About Us</span></Link>
                    </li><li>
                        <Link to="/ContactUs"><span>Contact Us</span></Link>
                    </li>
                   
                    {/* You can add more links here for other routes if needed */}
                </ul>
                </nav>
               
            </div>
            </header>
       
        </>
    );
}
export default Header;
