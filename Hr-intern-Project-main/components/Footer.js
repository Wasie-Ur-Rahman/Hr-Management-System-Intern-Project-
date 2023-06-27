import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
export default function Footer()
{
return (
    <div className=" -z-10 absolute flex flex-col w-screen h-screen justify-end">
        <div className="flex flex-col bg-[#2F2F2F] h-[157px] w-full justify-center ">
            <div className="absolute flex flex-col h-36 w-full justify-evenly  ">
                <div className="relative flex flex-row h-5 w-full justify-center  text-white">

                    <p>Terms of Service</p>
                    <p className="mr-3 ml-3">|</p>
                    <p>Privacy Policy</p>
                    <p className="mr-3 ml-3">|</p>
                    <p>User Agreement</p>
                </div> 

                <div className=" relative my-2 flex flex-row h-12 w-full   justify-center">
                     <img className="ml-9 "src="Care.png" height={50} width={125}/> 
                    <div className="flex flex-row h-4 w-8 ">
                    <img src="Reg.png" height={50} width={15}/> 
                    </div>
                 
                </div>
            <div className="  flex flex-row h-7 w-full  justify-center  text-white">
                We recognise our responsibility to use data and technology for good. 
            </div>
            </div>
        
        </div>
    </div>
    )
} 