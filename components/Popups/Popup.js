
import React, { Component } from 'react';
import { useState } from 'react';
export default function Popup ({name ,source, height ,width,btn_name,onClick ,onChange, show1 , }) {

    return (

        <div
        className={`  h-[100vh] flex flex-row item  z-50 overflow-hidden fixed inset-0  transition ease-in-out  duration-1000 delay-1000 w-full bg-slate-200 opacity-95 justify-start items-center ${
          show1 ? "visible" : "hidden"
        }      text-xl `}
        onClick={onClick} onChange={onChange}
      >
       
      
        <div className= {` flex flex-col h-screen w-screen  justify-center items-center visible" `}>
    
                 
    <div className='flex flex-col h-60 w-[500px] bg-white rounded-lg  shadow-md shadow-[#E8E8E8]  '>
            <div className=' relative top-9 font-semibold text-xl  flex flex-col h-48 w-full   justify-evenly items-center leading-loose'>
              
          
            {name}
              <img src= {`${source}`} height={height} width={width}/></div>
     <div className='flex flex-col h-full w-full rounded-lg  justify-end  '>                           
<div className='flex flex-col h-24 w-full bg-[#E8E8E8] rounded-b-lg justify-center items-center '>
<button className='flex flex-row rounded-lg font-medium h-10 w-32 text-xl bg-white  justify-center items-center hover:bg-[#4E4E4E] hover:text-white ' > 

{btn_name}</button>
</div>
</div>
    </div>
   
</div>
</div>
        )

}