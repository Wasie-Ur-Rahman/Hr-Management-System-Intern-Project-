import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";


const Main_Button = ({shape , click , click1, onClick , type , name}) =>
{
    return(
        <div>
                 <button className={` rounded-${shape}  w-52 h-10 text-lg font-semibold btn " ${
                click
                  ? "bg-[#747474] &&  border-[#4E4E4E] && text-white"
                  : " bg-[#FFFFFF]  &&  border-[#4E4E4E] && text-black "
              } || ${
                click1
                  ? " hover:bg-none &&bg-[#FFFFFF]  &&  border-[#4E4E4E]  "
                  : " hover:bg-[#747474] &&  border-[#4E4E4E]   "
              } ` } onClick={onClick} type={`${type}`} >
                {name}
              </button>
        
     
        
        </div>
    )
}
export default Main_Button