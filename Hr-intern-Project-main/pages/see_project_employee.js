import { supabase } from '../database/Database'
import React from "react";
import  { useState } from "react";
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';
import { useRouter } from "next/router";
export default function See_project_employees({project_employee}) {
    
  //  console.log({project_employee});
    return (
     <div>
          
           <div className="flex flex-col h-[65vh] w-3/4  rounded-md  bg-[#DBE3D6] opacity-75 shadow-md shadow-[#DBE3D6] ">
                <div className="flex flex-row justify-center bg-[#DBE3D6]  text-2xl font-semibold text-black rounded-md leading-loose h-20">
                  SEE PROJECT DETAILS
                </div>

                {project_employee.map((project_employee) => (
                  <div key={project_employee.id} href={`/emplist/${project_employee.id}`}>
                    <div className="h-20 text-base flex flex-row">
                    {project_employee.id}           {project_employee.employees.emp_fullname}   {project_employee.employees.personal_email} {project_employee.projects.proj_name} {project_employee.projects.created_at}  
                    </div>
                  </div>
                ))}
                <div className="flex flex-col h-full w-full  items-center "></div>
              </div> 
                        
     </div>
    )
  }


export async function getStaticProps() {
   
  
const { data: project_employee, error } = await supabase
.from('projects_employee')
.select(`
  *,
  projects (
    *
  ),
  employees (
    *
  )
`)
console.log("Hello",project_employee);

    //const { data: employee } = await supabase.from("employees").select("*");
    return {
      props: { project_employee },
    };
  }