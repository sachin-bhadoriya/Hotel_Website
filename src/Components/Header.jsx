import {Link} from 'react-router-dom'


const Header=()=>{
    return (
        <>
             
            <header>
            <div>
                <p>This is a Header</p>
                <nav>
                <ul>
                    <li>
                    <Link to="/Home">Home</Link>
                    </li><li>
                    <Link to="/Blog">Blog</Link>
                    </li><li>
                    <Link to="/Pages">Pages</Link>
                    </li><li>
                    <Link to="/Rooms">Rooms</Link>
                    </li><li>
                    <Link to ="/AboutUs">About Us</Link>
                    </li><li>
                    <Link to="/ContactUs">Contact Us</Link>
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
