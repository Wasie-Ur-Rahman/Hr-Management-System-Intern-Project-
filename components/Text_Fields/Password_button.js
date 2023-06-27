import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";

const Password_button =({onClick , isActive}) =>
{
return (

   

        <button onClick={onClick}  className="flex flex-col leading-none" >
        { isActive ?  <img
                    src="show.svg"
                    height={20}
                    width={20}
                    className="relative bottom-[66px] left-[1050px] "/> : <img
                    src="hide.svg"
                    height={20}
                    width={20}
                    className="relative bottom-[66px] left-[1050px] "
                  />} 
                 
        </button>
   
)
}
export default Password_button