import React from "react";
import Input_Texts from "../../components/Text_Fields/Input_Texts";


const Input_Text_Container =({derpartment_id ,project_name,manager_id ,setDepartment_id ,setProject_Name ,setManagerId }) =>
{

    return(
        <div  className="mb-4"> 
    {/* Department Id */}
        <Input_Texts  height={"[32px]"} type= {"text"} id= {"project_id"} name= {"project_id"} onChange = {(e)=>{setDepartment_id(e.target.value)}} value= {derpartment_id} palceholder={"Department Id"} maxLength={"50"} pattern={"[A-Za-z0-9.-]{2,150}"} name_1={"Department Id"} statement={"Please provide a valid Department Id"}/>
   
      {/* Project Name */}
     
      <Input_Texts  height={"[32px]"} type= {"text"} id= {"project_id"} name= {"project_id"} onChange = {(e)=>{setProject_Name(e.target.value)}} value= {project_name} palceholder={"Project Name"} maxLength={"50"} pattern={"[A-Za-z\s]{2,50}"} name_1={"Project Name"} statement={"Please provide a valid Project Name"}/>
 
     {/* Manager Id */}
      <Input_Texts  height={"[32px]"} type= {"text"} id= {"manager_id"} name= {"manager_id"} onChange = {(e)=>{setManagerId(e.target.value)}} value= {manager_id} palceholder={"Manager Id"} maxLength={"50"} pattern={"[A-Za-z0-9.-]{2,150}"} name_1={"Manager Id"} statement={"Please provide a valid Manager Id"}/>
        </div>
       
    )
}
export default Input_Text_Container

