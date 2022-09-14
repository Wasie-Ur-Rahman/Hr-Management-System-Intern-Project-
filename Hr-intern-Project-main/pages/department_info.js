import { supabase } from '../database/Database'
import React from "react";
import  { useState } from "react";
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';
import { useRouter } from "next/router";
export default function Department_info()
{
   
    const [dname, setDname] = useState("");
    const [Mid, setMid] = useState("");


    const handleDname = (e) => 
    {
            setDname(e.target.value);
    }
    const handleMid = (e) =>
    {
        setMid(e.target.value);
    }

    async function handleSubmit ()
    {
        insert(dname , Mid);

    }

    async function insert(dname , Mid)
    {
            
        const {data1, error1 } = await supabase.from ('employees').select('*').eq('emp_id', Mid)

        console.log("Check")
      console.log(data1);
      if(error1)
      {
        console.log(error1);
      }
      else
      {
        console.log("Yes")
       const { data, error } = await supabase
        .from('departments')
        .insert([
          { dep_name: dname , manager_id: Mid},
        ])
        console.log("Yes1");
        console.log(data);
        if(error)
        {
            console.log("No")
          console.log(error);
        }
      }
    
    }

         return (
         <div>
             Department Name
                       <input type="text" id="depname" name="depname"   onChange={handleDname} value={dname} className="  input peer placeholder-transparent rounded-md focus:ring-1 focus:ring-[#3D4E42] h-10  w-full border border-double  border-white focus:border-[#3D4E42]  outline-none   text-lg font-normal p-2 "
 placeholder="Department Name" autoComplete="off" pattern="[A-Za-z\s]{0,50}" required/>
           Manager Id
<input type="text" id="manid" name="manid" onChange={handleMid} value={Mid} className="  input peer placeholder-transparent rounded-md focus:ring-1 focus:ring-[#3D4E42] h-10  w-full border border-double  border-white focus:border-[#3D4E42]  outline-none   text-lg font-normal p-2 "
 placeholder="Manager Id" autoComplete="off" pattern="[A-Za-z\s]{0,150}" required/>
       
       
       <button className="rounded-md   bg-white hover:bg-[#465B4D]  w-52 h-10 text-lg font-semibold btn hover:text-[#5EAC74]  text-black  " onClick={handleSubmit} type="submit"> Add Department <br /></button>
       
       
         </div>

         )
}