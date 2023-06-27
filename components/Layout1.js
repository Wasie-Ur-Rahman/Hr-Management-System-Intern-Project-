
import React from "react";
import MainPage from "./MainPage";
import Add_Emp_Lay from "./Add_Emp_Lay";


const Layout1 = ({children}) => 
{
    return (

             <div className="z-10 relative " >
           
                <MainPage/>
           
               <Add_Emp_Lay/>
          
              
            <main className=" z-20 relative " >
            
                {children}
                
                
            </main> 
        
          
            </div>
           
    )
};
export default Layout1