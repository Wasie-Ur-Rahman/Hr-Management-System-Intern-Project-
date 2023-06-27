
import React from "react"
import { useState } from "react"
import { useRouter } from "next/router"
import  { Context } from "../database/authContext";
import { useContext } from "react";
export default function Display() {
    const { user, role, uuid ,emp} = useContext(Context);
    console.log("Hell",user);
  return ( 
  
   <div class="flex-col justify-center w-full font-bold text-3xl  ">
  
  <div className="flex-row w-full ">

    </div>
   </div>
    
 
  )
}


