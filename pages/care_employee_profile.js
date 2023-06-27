import { supabase } from '../database/Database'
import React from "react";
import 'antd/dist/antd.css';
import ListEmp from '../components/List/ListEmp';
import { getLayout } from '../layout/AdminLayout';

export default function care_employee_profile({employee}) {
    
    return (
      <div className='w-full h-full overflow-auto bg-white '>
        <div className=' flex flex-col  items-center justify-start  gap-11 w-full h-fit p-10  border-t-0 border-black border-l-0 border-[1px]'>
          
          <div className="flex flex-col h-full w-3/4  rounded-md  opacity-75 justify-center shadow-md ">
                <div className="flex flex-row justify-center  text-2xl font-semibold text-black rounded-md leading-loose h-20">
                  C@RE EMPLOYEES
                </div>

            {employee.map((employee) => (
                  <div key={employee.id}>
                  <ListEmp emp={employee} link ={`/emplist/${employee.id}`} />   
                  </div>
                ))}
  
              </div>
                        
     </div>
      </div>

    )
  }


care_employee_profile.getLayout = getLayout
export async function getStaticProps() {
   
    const { data: employee } = await supabase.from("employees").select("*");
    return {
      props: { employee },
    };
  }




