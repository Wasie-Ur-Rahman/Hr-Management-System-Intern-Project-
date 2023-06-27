import { supabase } from '../database/Database'
import React from "react";
import 'antd/dist/antd.css';
import { getLayout } from '../layout/AdminLayout';
import Add_Care_Dep_Emp_Container from '../Pages_Main_Components/Pages_Main_Container/Add_Care_Dep_Emp_Container';
export default function care_department_employee()
{
    return (
        <div className='w-full h-full overflow-auto bg-white '>
        <div className=' flex flex-col  items-center justify-start  gap-11 w-full h-full p-10  border-t-0 border-black border-l-0 border-[1px]'>
          
          <div className="flex flex-col h-full w-3/4  rounded-md   opacity-60 justify-center  shadow-md ml-44 leading-loose">
                <div className="flex flex-row justify-center items-center  text-2xl font-semibold text-black rounded-md leading-loose h-32">
                  ADD C@RE DEPARTMENT
                  
                </div>

       <Add_Care_Dep_Emp_Container/>

              </div>
                        
     </div>
      </div>
    )
}
care_department_employee.getLayout = getLayout