
import React, { Component } from 'react';
import { useState } from 'react';
export default function Unsuccess () {
    const[open ,setOpen] =useState(false);
    return (
        
<div className={ `flex flex-col h-screen w-screen  justify-center items-center  visible" }  `} >
    
                 
    <div className='flex flex-col h-60 w-[500px] bg-white rounded-lg  shadow-md shadow-[#E8E8E8]  '>
            <div className=' relative top-9 font-semibold text-xl  flex flex-col h-48 w-full   justify-evenly items-center leading-loose'>
              
          
              Unsuccessful  , Try again
              <img src='/cross.svg' height={25} width={25}/></div>
     <div className='flex flex-col h-full w-full rounded-lg  justify-end  '>                           
<div className='flex flex-col h-24 w-full bg-[#E8E8E8] rounded-b-lg justify-center items-center '>
<button className='flex flex-row rounded-lg font-medium h-10 w-32 text-xl bg-white  justify-center items-center hover:bg-[#4E4E4E] hover:text-white '  > 

Try on</button>
</div>
</div>
    </div>
   
</div>
        )

}
