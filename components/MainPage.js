import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
export default function MainPage()
{
return (
    <div className="  flex flex-col max-h-fit w-screen bg-[#ECEBEB] absolute justify-center ">
        <div className="flex flex-col h-36 w-screen  justify-center  ">
            <div className="flex flex-row h-20 w-screen bg-[#C4C4C4]  shadow-md shadow-stone-800">
                  <div className="flex flex-row h-full w-full justify-center items-center font-semibold text-2xl text-white">
                  <img className="absolute -left-[-5px]"src="wise.svg" height={50} width={150}/>  

                    ADD EMPLOYEES
                    </div>
            
                    {/* <img src="./images/Reg.png" height={50} width={15}/>  */}
                  
                 
            
            </div>
        </div>
       
      
    </div>
    )
} 