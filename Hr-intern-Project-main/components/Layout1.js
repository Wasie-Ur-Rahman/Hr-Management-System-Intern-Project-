
import React from "react";
import MainPage from "./MainPage";

const Layout1 = ({children}) => 
{
    return (

             <div className="z-10 flex flex-row h-screen w-screen " >
            
                <MainPage/>
               
            <main class="flex flex-row h-screen max-w-fit bg-white bg-opacity-100 z-20 relative " >
            
                {children}
                
                
            </main> 
        
          
            </div>
           
    )
};
export default Layout1