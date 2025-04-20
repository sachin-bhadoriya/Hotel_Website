import React, {useState,createContext} from 'react';
//create context
const UserContext = createContext();
// store registration data and pass in SignIn
const MyProvider = ({children})=>{
    const [registrations,setRegistrations]  = useState([]);
    const addRegistrations = (newregistration)=>{
        setRegistrations((prev)=>[...prev,newregistration]);
      
    };
    return (
        <UserContext.Provider  value={{registrations,addRegistrations}}>
        {children}   {/*Render the children here */}
        </UserContext.Provider>
    );
};
export {UserContext, MyProvider};
