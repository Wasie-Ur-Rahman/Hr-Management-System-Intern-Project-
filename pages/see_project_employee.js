import { supabase } from '../database/Database'
import React from "react";
import 'antd/dist/antd.css';
import ProjectEmpList from '../components/List/ProjectEmpList';
import { getLayout } from '../layout/AdminLayout';
export default function See_project_employees({project_employee}) {
    
  //  console.log({project_employee});
    return (
      <div className='w-full h-full overflow-auto bg-white '>
      <div className=' flex flex-col  items-center justify-start  gap-11 w-full h-screen p-10  border-t-0 border-black border-l-0 border-[1px]'>
        
        <div className="flex flex-col h-full w-3/4  rounded-md  opacity-75  shadow-md ">
              <div className="flex flex-row justify-center  text-2xl font-semibold text-black rounded-md leading-loose h-20">
               PROJECT EMPLOYEES LIST
              </div>

                      {project_employee.map((project_employee) => (
                          <div key={project_employee.id} >

                            <ProjectEmpList proj_emp={project_employee} link={`/emplist/${project_employee.id}`}/>
                          
                          </div>
                        ))}


            </div>
                      
   </div>
    </div>
    )
  }

See_project_employees.getLayout = getLayout


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