import { useState } from 'react';
//import reactLogo from './assets/react.svg'
import {BrowserRouter as Router, Route,Routes,Link,Navigate} from 'react-router-dom';
// import viteLogo from '/vite.svg'
import Styles from './App.module.css';
import Header from './Components/JSXFile/Header';
import Home from './Components/JSXFile/Home';
import AboutUs from './Components/AboutUs';
import Pages from './Components/Pages';
import Rooms from './Components/Rooms';
import Blog from './Components/Blog';
import ContactUs from './Components/ContactUs';
import LogoImage from  './Components/JSXFile/Logo';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Router> 
        <div>
        
        <div className={Styles.headerContainer}>
        <Header/>
        </div>
          
        
  
      
            <Routes>
                      <Route path="/Logo" element={<LogoImage/>}/>
                      <Route path="/Home" element={<Home />} />
                      <Route path="/Blog" element={<Blog/>}/>
                      <Route path="/Pages" element={<Pages/>}/>
                      <Route path="/Rooms"  element={<Rooms/>}/>
                      <Route path="/AboutUs"  element={<AboutUs/>}/>
                      <Route path="/ContactUs" element={<ContactUs/>}/>
                      
                      {/* Add more routes here for other components if needed */}
                      <Route path="/" element={<Navigate to="/Home" />} />
            </Routes>  
        </div>
      </Router> 
    
  
    </>
  );
}

export default App;
