import React from "react";
import Input_Texts from "../../components/Text_Fields/Input_Texts";


const Input_Text_Container =({project_id ,setProjectId,setEmployeeId ,employee_id }) =>
{

    return(
        <div  className="mb-4"> 
    {/* Project Id */}
        <Input_Texts  height={"[32px]"} type= {"text"} id= {"project_id"} name= {"project_id"} onChange = {(e)=>{ setProjectId(e.target.value)}} value= {project_id} palceholder={"Project Id"} maxLength={"50"} pattern={"[A-Za-z0-9.-]{2,150}"} name_1={"Project Id"} statement={"Please provide a valid Project Id"}/>  
 
     {/* Employee Id */}
      <Input_Texts  height={"[32px]"} type= {"text"} id= {"employee_id"} name= {"employee_id"} onChange = {(e)=>{ setEmployeeId(e.target.value)}} value= {employee_id} palceholder={"Employee Id"} maxLength={"50"} pattern={"[A-Za-z0-9.-]{2,150}"} name_1={"Employee Id"} statement={"Please provide a valid Employee Id"}/>
        </div>
       
    )
}
export default Input_Text_Container

