
import React from "react";
import SideBar from "./SideBar";
import Footer from "./Footer";

const Layout = ({children}) => 
{
    return (

             <div className="z-10 flex flex-row h-screen w-screen " >
            
                <SideBar/>
               
            <main class="flex flex-row h-screen max-w-fit bg-white bg-opacity-100 z-20 relative " >
            
                {children}
                
                
            </main> 
        
            <Footer/>
            </div>
           
    )
};
export default Layout