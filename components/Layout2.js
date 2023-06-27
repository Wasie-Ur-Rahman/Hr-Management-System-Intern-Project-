
import React from "react";
import Page from "./Page";
import Display_Employee from "./Display_Employee";


const Layout2 = ({children}) => 
{
    return (

             <div className="z-10 relative flex flex-col max-h-fit  " >
            
                <Page/>
                <Display_Employee/>
               
          
              
            <main className=" z-20 relative flex flex-col max-h-fit w-screen" >
            
                {children}
                
                
            </main> 
        
          
            </div>
           
    )
};
export default Layout2