import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
const Multiple_File_Selection = ({type,accept,id,placeholder,onChange,name,statement})=>
{
    return(
        <div>
            <label className=" relative text-black text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-6 peer-focus:text-gray-600 peer-focus:text-sm">
                {name}
              </label>
              <input
                type={`${type}`}
                accept={`${accept}`}
                id={`${id}`}
                placeholder={`${placeholder}`}
                onChange={onChange}
                className="block  peer placeholder-transparent w-auto text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                multiple
                required
              />
              
              <p className=" invisible peer-invalid:visible text-red-800 text-sm  ">
                {statement}
              </p>
        </div>
    )
}
export default Multiple_File_Selection