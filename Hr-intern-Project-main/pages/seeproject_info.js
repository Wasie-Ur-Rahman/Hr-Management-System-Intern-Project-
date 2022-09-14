import { supabase } from '../database/Database'
import React from "react";
import  { useState } from "react";
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';
import { useRouter } from "next/router";
export default function Seeemployees_info({project_details}) {
    
    console.log({project_details});
    return (
     <div>
          
          <div className="flex flex-col h-[65vh] w-3/4  rounded-md  bg-[#DBE3D6] opacity-75 shadow-md shadow-[#DBE3D6] ">
                <div className="flex flex-row justify-center bg-[#DBE3D6]  text-2xl font-semibold text-black rounded-md leading-loose h-20">
                  SEE PROJECT DETAILS
                </div>

                {project_details.map((project_details) => (
                  <div key={project_details.proj_id} href={`/emplist/${project_details.proj_id}`}>
                    <div className="h-20 text-base flex flex-row">
                    {project_details.departments.id}    {project_details.proj_name} {project_details.departments.dep_name}  {project_details.created_at} 
                    </div>
                  </div>
                ))}
                <div className="flex flex-col h-full w-full  items-center "></div>
              </div>
                        
     </div>
    )
  }


export async function getStaticProps() {
   
  
const { data: project_details, error } = await supabase
.from('projects')
.select(`
  *,
  departments (
    *
  )
`)
console.log("Hello",project_details[0].departments);

    //const { data: employee } = await supabase.from("employees").select("*");
    return {
      props: { project_details },
    };
  }