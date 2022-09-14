import { supabase } from '../database/Database'
import React from "react";
import  { useState } from "react";
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';
import { useRouter } from "next/router";
export default function Seeemployees({employee}) {
    
    console.log({employee});
    return (
     <div>
          
          <div className="flex flex-col h-[65vh] w-3/4  rounded-md  bg-[#DBE3D6] opacity-75 shadow-md shadow-[#DBE3D6] ">
                <div className="flex flex-row justify-center bg-[#DBE3D6]  text-2xl font-semibold text-black rounded-md leading-loose h-20">
                  SEE EMPLOYEES
                </div>

                {employee.map((employee) => (
                  <a key={employee.id} href={`/emplist/${employee.id}`}>
                    <a className="h-20 text-base flex flex-row">
                      {employee.id} {employee.emp_fullname} {employee.personal_email}
                    </a>
                  </a>
                ))}
                <div className="flex flex-col h-full w-full  items-center "></div>
              </div>
                        
     </div>
    )
  }


export async function getStaticProps() {
   
    const { data: employee } = await supabase.from("employees").select("*");
    return {
      props: { employee },
    };
  }