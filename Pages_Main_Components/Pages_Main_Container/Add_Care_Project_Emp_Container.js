import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import Input_Text_Container from "../Add_Care_Proj_Emp/Input_Text_Container";
import Main_Button_Container from "../Add_Care_Proj_Emp/Main_Button_Container";
const Add_Care_Project_Emp_Container = () => 
{
  
  
  const [project_id , setProjectId]= useState("");
  const [employee_id , setEmployeeId]= useState("");

  return(
    <div >
          
        <Input_Text_Container setProjectId={setProjectId} project_id={project_id}  employee_id={employee_id} setEmployeeId={setEmployeeId}  />
         {console.log("Project Id" , project_id)}
      <Main_Button_Container project_id={project_id}  employee_id={employee_id}/>
    </div>
  )
}
export default Add_Care_Project_Emp_Container
