import React from "react";
import Input_Texts from "../../components/Text_Fields/Input_Texts";


const Input_Text_Container =({d_id , setDid ,eid ,setEid }) =>
{

    return(
        <div  className="mb-4"> 
    {/* Department Id */}
        <Input_Texts  height={"[32px]"} type= {"text"} id= {"did"} name= {"did"} onChange = {(e)=>{setDid(e.target.value);}} value= {d_id} palceholder={"Department Id"} maxLength={"50"} pattern={"[A-Za-z0-9.-]{10,150}"} name_1={"Department Id"} statement={"Please provide a valid Department Id"}/>
   
      {/* Employee Id */}
      <Input_Texts  height={"[32px]"} type= {"text"} id= {"eid"} name= {"eid"} onChange = {(e)=>{setEid(e.target.value);}} value= {eid} palceholder={"Employee Id"} maxLength={"150"} pattern={"[A-Za-z0-9.-]{10,150}"} name_1={"Employee Id"} statement={"Please provide a valid Employee Id"}/>

 
        </div>
       
    )
}
export default Input_Text_Container

