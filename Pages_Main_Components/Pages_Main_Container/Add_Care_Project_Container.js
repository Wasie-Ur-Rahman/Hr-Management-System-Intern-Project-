import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import Input_Text_Container from "../Add_Care_Projects/Input_Text_Container";
import Main_Button_Container from "../Add_Care_Projects/Main_Button_Container";
const Add_Care_Project_Container = () => 
{
  
  
    const [derpartment_id , setDepartment_id]= useState("");
    const [project_name , setProject_Name]= useState("");
    const [manager_id , setManagerId]= useState("");
    

  return(
    <div >
          
        <Input_Text_Container setDepartment_id={setDepartment_id} derpartment_id={derpartment_id} project_name={project_name} setProject_Name={setProject_Name} manager_id={manager_id} setManagerId={setManagerId}/>
         {console.log("Department Id" , derpartment_id)}
      <Main_Button_Container derpartment_id={derpartment_id}  project_name={project_name} manager_id={manager_id}/>
    </div>
  )
}
export default Add_Care_Project_Container
