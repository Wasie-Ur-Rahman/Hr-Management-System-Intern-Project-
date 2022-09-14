
import { supabase } from '../database/Database'
import React from "react";
import  { useState } from "react";
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';
import { useRouter } from "next/router";
export default function Seedepartment_info({dep_info}) {
    
    console.log({dep_info});
    return (
     <div>
          
          <div className="flex flex-col h-[65vh] w-3/4  rounded-md  bg-[#DBE3D6] opacity-75 shadow-md shadow-[#DBE3D6] ">
                <div className="flex flex-row justify-center bg-[#DBE3D6]  text-2xl font-semibold text-black rounded-md leading-loose h-20">
                  SEE DEPARTMENT INFORMATION
                </div>

                {dep_info.map((dep_info) => (
                  <div key={dep_info.dep_id}>
                    <div className="h-20 text-base flex flex-row">
                      {dep_info.id} {dep_info.dep_name} {dep_info.manager_id} {dep_info.dep_id}
                    </div>
                  </div>
                ))}
                <div className="flex flex-col h-full w-full  items-center "></div>
              </div>
                        
     </div>
    )
  }


export async function getStaticProps() {
   
    const { data: dep_info } = await supabase.from("departments").select("*");
    return {
      props: { dep_info },
    };
  }