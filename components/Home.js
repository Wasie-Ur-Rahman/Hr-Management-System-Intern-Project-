import { supabase } from '../database/Database'
import React from "react";
import  { useState } from "react";
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';
import { useRouter } from "next/router";

export default function Home() {
  const router =useRouter();
  return (
   <div>
         <button
                className="  bg-transparent   hover:tracking-tighter    text-[#DBE3D6]  w-full h-20 font-bold border-none transition ease-in-out duration-500 text-lg  hover:text-[#5EAC74] "
                onClick={()=>router.push("/addemployees")}
              >
                Add Employee
              </button>

              <button
                className="  bg-transparent   hover:tracking-tighter text-[#DBE3D6]   w-full h-20 font-bold border-none transition ease-in-out duration-500 text-lg hover:text-[#5EAC74]"
                onClick={() =>router.push("/seeemployees") }
              >
                See Employees
              </button>
 
 
              <button
                className="  bg-transparent   hover:tracking-tighter text-[#DBE3D6]   w-full h-20 font-bold border-none transition ease-in-out duration-500 text-lg hover:text-[#5EAC74]"
                onClick={() =>router.push("/department_info") }
              >
                Department Information
              </button>

              <button
                className="  bg-transparent   hover:tracking-tighter text-[#DBE3D6]   w-full h-20 font-bold border-none transition ease-in-out duration-500 text-lg hover:text-[#5EAC74]"
                onClick={() =>router.push("/seedepartment_info") }
              >
                See Department Information
              </button>

              <button
                className="  bg-transparent   hover:tracking-tighter text-[#DBE3D6]   w-full h-20 font-bold border-none transition ease-in-out duration-500 text-lg hover:text-[#5EAC74]"
                onClick={() =>router.push("/department_employees") }
              >
                Department Employees
              </button>

              <button
                className="  bg-transparent   hover:tracking-tighter text-[#DBE3D6]   w-full h-20 font-bold border-none transition ease-in-out duration-500 text-lg hover:text-[#5EAC74]"
                onClick={() =>router.push("/seedepartment_employees") }
              >
                See Department Employees
              </button>

              <button
        className="  bg-transparent   hover:tracking-tighter text-[#DBE3D6]   w-full h-20 font-bold border-none transition ease-in-out duration-500 text-lg hover:text-[#5EAC74]"
        onClick={() => router.push("/appraisal")}
      >
        Appraisal Session 
      </button>

      <button
        className="  bg-transparent   hover:tracking-tighter text-[#DBE3D6]   w-full h-20 font-bold border-none transition ease-in-out duration-500 text-lg hover:text-[#5EAC74]"
        onClick={() => router.push("/answer")}
      >
        View FeedBack 
      </button>

      <button
        className="  bg-transparent   hover:tracking-tighter text-[#DBE3D6]   w-full h-20 font-bold border-none transition ease-in-out duration-500 text-lg hover:text-[#5EAC74]"
        onClick={() => router.push("/project")}
      >
        Project Information
      </button>
      <button
        className="  bg-transparent   hover:tracking-tighter text-[#DBE3D6]   w-full h-20 font-bold border-none transition ease-in-out duration-500 text-lg hover:text-[#5EAC74]"
        onClick={() => router.push("/seeproject_info")}
      >
        See Project Information
      </button>
      <button
        className="  bg-transparent   hover:tracking-tighter text-[#DBE3D6]   w-full h-20 font-bold border-none transition ease-in-out duration-500 text-lg hover:text-[#5EAC74]"
        onClick={() => router.push("/project_employees")}
      >
        Project Employees
      </button>
      <button
        className="  bg-transparent   hover:tracking-tighter text-[#DBE3D6]   w-full h-20 font-bold border-none transition ease-in-out duration-500 text-lg hover:text-[#5EAC74]"
        onClick={() => router.push("/see_project_employee")}
      >
        See Project Employees
      </button>
   </div>
  )
}
