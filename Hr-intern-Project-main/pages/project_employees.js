import { supabase } from '../database/Database'
import React from "react";
import  { useState } from "react";
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';
import { useRouter } from "next/router";



export default function Project_employees ({})
{

    const [project_id , setProjectId]= useState("");
    const [employee_id , setEmployeeId]= useState("");
  

    
    const handleProject_Id =(e) =>
    {
        setProjectId(e.target.value);
    }

    const handleEmployee_Id =(e) =>
    {
        
        setEmployeeId(e.target.value);
    }

 
    async function Submit ()
    {
        information_gatherer();
    }    

    async function information_gatherer ()
    {
        console.log("in")
        const { data, error } = await supabase
  .from('projects_employee')
  .insert([
    { proj_id:project_id  , emp_id : employee_id },
  ])

  console.log(data);
  if(error)
  {
    console.log(error);
  }
    }
    

    return(<div>
      
Project Id
<input type="text" id="project_id" name="project_id"  onChange={handleProject_Id} value={project_id} className="  input peer placeholder-transparent rounded-md focus:ring-1 focus:ring-[#3D4E42] h-10  w-full border border-double  border-white focus:border-[#3D4E42]  outline-none   text-lg font-normal p-2 "
 placeholder="Project Id" autoComplete="off"  required/>


 Employee Id
<input type="text" id="employee_id" name="employee_id"  onChange={handleEmployee_Id} value={employee_id} className="  input peer placeholder-transparent rounded-md focus:ring-1 focus:ring-[#3D4E42] h-10  w-full border border-double  border-white focus:border-[#3D4E42]  outline-none   text-lg font-normal p-2 "
 placeholder="Employee Id" autoComplete="off"  required/>



<button className="rounded-md   bg-white hover:bg-[#465B4D]  w-52 h-10 text-lg font-semibold btn hover:text-[#5EAC74]  text-black  " onClick={Submit} type="submit"> Add Project Employee<br /></button>
    </div>)
}