import { supabase } from '../database/Database'
import React from "react";
import  { useState } from "react";
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';
import { useRouter } from "next/router";



export default function Project ({})
{

    const [derpartment_id , setDepartment_id]= useState("");
    const [project_name , setProject_Name]= useState("");
    const [manager_id , setManagerId]= useState("");

    
    const handleDepartment_id =(e) =>
    {
        setDepartment_id(e.target.value);
    }

    const handleProject_name =(e) =>
    {
        
        setProject_Name(e.target.value);
    }

    const handleManager_id =(e) =>
    {
        
        setManagerId(e.target.value);
    }
     
    async function Submit ()
    {
        information_gatherer();
    }    

    async function information_gatherer ()
    {
        console.log("in")
        const { data, error } = await supabase
  .from('projects')
  .insert([
    { dep_id: derpartment_id , proj_name : project_name  , manager_id :manager_id },
  ])

  console.log(data);
  if(error)
  {
    console.log(error);
  }
    }
    

    return(<div>
      
Department Id
<input type="text" id="project_id" name="project_id"  onChange={handleDepartment_id} value={derpartment_id} className="  input peer placeholder-transparent rounded-md focus:ring-1 focus:ring-[#3D4E42] h-10  w-full border border-double  border-white focus:border-[#3D4E42]  outline-none   text-lg font-normal p-2 "
 placeholder="Project Id" autoComplete="off"  required/>


Project Name
<input type="text" id="project_id" name="project_id"  onChange={handleProject_name} value={project_name} className="  input peer placeholder-transparent rounded-md focus:ring-1 focus:ring-[#3D4E42] h-10  w-full border border-double  border-white focus:border-[#3D4E42]  outline-none   text-lg font-normal p-2 "
 placeholder="Project Id" autoComplete="off"  required/>


Manager Id
<input type="text" id="project_id" name="project_id"  onChange={handleManager_id} value={manager_id} className="  input peer placeholder-transparent rounded-md focus:ring-1 focus:ring-[#3D4E42] h-10  w-full border border-double  border-white focus:border-[#3D4E42]  outline-none   text-lg font-normal p-2 "
 placeholder="Project Id" autoComplete="off"  required/>


<button className="rounded-md   bg-white hover:bg-[#465B4D]  w-52 h-10 text-lg font-semibold btn hover:text-[#5EAC74]  text-black  " onClick={Submit} type="submit"> Add Project Information <br /></button>
    </div>)
}