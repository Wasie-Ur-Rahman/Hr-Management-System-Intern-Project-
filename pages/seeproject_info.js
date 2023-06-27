import { supabase } from '../database/Database'
import React from "react";
import 'antd/dist/antd.css';
import ProjectList from '../components/List/ProjectList';
import { getLayout } from '../layout/AdminLayout';

export default function Seeemployees_info({project_details}) {
    
    return (
      <div className='w-full h-full overflow-auto bg-white '>
        <div className=' flex flex-col  items-center justify-start  gap-11 w-full h-screen p-10  border-t-0 border-black border-l-0 border-[1px]'>
          
          <div className="flex flex-col h-full w-3/4  rounded-md  opacity-75  shadow-md ">
                <div className="flex flex-row justify-center  text-2xl font-semibold text-black rounded-md leading-loose h-20">
                 PROJECT DETAILS
                </div>

                {project_details.map((project_details) => (
                  <div key={project_details.proj_id}>
                      <ProjectList pr={project_details} link ={`/emplist/${project_details.proj_id}`} /> 
                  </div>
                   
                ))}
  
              </div>
                        
     </div>
      </div>
    )
  }

  Seeemployees_info.getLayout = getLayout

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