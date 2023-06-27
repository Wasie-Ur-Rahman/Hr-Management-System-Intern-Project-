import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";

const Input_Texts = ({type , id , name , onChange , value , palceholder,name_1,statement,maxLength , pattern , height}) =>
{
    return (
        <div className= {`relative w-full   flex-row text-[#313132] h-${height }   "`}>
            <input   type={`${type}`} id={`${id}`} name={`${name}`} onChange={onChange} value= {value} placeholder={`${palceholder}`} maxLength={`${maxLength}`} pattern={`${pattern}`}  className=" input peer placeholder-transparent rounded-md focus:ring-1  focus:ring-[#4E4E4E] h-10 w-full border border-double  border-zinc-900 focus:border-[#4E4E4E]  outline-none   text-lg font-normal p-3  "/>
            <label className=" absolute left-0 -top-5 text-black text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-6 peer-focus:text-gray-600 peer-focus:text-sm">
                {name_1}
              </label>
              <p className=" invisible peer-invalid:visible text-red-800 text-sm  ">
                {statement}
              </p>
        </div>
    )
}

export default Input_Texts;