import React from "react";
import Input_Texts from "../../components/Text_Fields/Input_Texts";


const Input_Text_Container =({dname , setDname ,Mid ,setMid }) =>
{

    return(
        <div  className="mb-4"> 
    {/* Department Name */}
        <Input_Texts  height={"[32px]"} type= {"text"} id= {"depname"} name= {"depname"} onChange = {(e)=>{setDname(e.target.value);}} value= {dname} palceholder={"Department Name"} maxLength={"50"} pattern={"[A-Za-z\s]{2,50}"} name_1={"Department Name"} statement={"Please provide a valid Department Name"}/>
   
      {/* Manager Id */}
      <Input_Texts  height={"[32px]"} type= {"text"} id= {"manid"} name= {"manid"} onChange = {(e)=>{setMid(e.target.value);}} value= {Mid} palceholder={"Manager Id"} maxLength={"150"} pattern={"[A-Za-z0-9.-]{2,150}"} name_1={"Manager Id"} statement={"Please provide a valid Manager Id"}/>

 
        </div>
       
    )
}
export default Input_Text_Container

