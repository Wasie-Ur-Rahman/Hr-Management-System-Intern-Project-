
import { supabase } from '../database/Database'
import React from "react";
import 'antd/dist/antd.css';
import DepartmentList from '../components/List/DepartmentList';
import { getLayout } from '../layout/AdminLayout';
export default function Seedepartment_info({dep_info}) {
    
    console.log({dep_info});
    return (
      <div className='w-full h-full overflow-auto bg-white '>
        <div className=' flex flex-col  items-center justify-start  gap-11 w-full h-screen p-10  border-t-0 border-black border-l-0 border-[1px]'>
          
          <div className="flex flex-col h-full w-3/4  rounded-md  opacity-75  shadow-md ">
                <div className="flex flex-row justify-center  text-2xl font-semibold text-black rounded-md leading-loose h-20">
                 Department List
                </div>

                {dep_info.map((dep_info) => (
                  <div key={dep_info}>
                  <DepartmentList dep_info={dep_info}  />   
                  </div>
                ))}
  
              </div>
                        
     </div>
      </div>
    )
  }

  Seedepartment_info.getLayout = getLayout

export async function getStaticProps() {
   
    const { data: dep_info } = await supabase.from("departments").select("*");
    return {
      props: { dep_info },
    };
  }