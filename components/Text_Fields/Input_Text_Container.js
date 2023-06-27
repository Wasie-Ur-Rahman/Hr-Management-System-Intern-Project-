import React from "react";
import Input_Texts from "./Input_Texts";
import Password_button from "./Password_button";
import File_Selection from "./File_Selection";
import Router from "next/router";
import { supabase } from "../../database/Database";
import { createContext, useEffect, useState ,useContext} from 'react';

export const Context = createContext({
  email: null,
  mail: null,
  cnic: null,
  fullname: null,
  password: null,
  home: null,
  departure: null,
  qualification: null,
  skills: null,
})
const Input_Text_Container =() =>
{
    const [email, setEmail] = useState("");
    const [mail, setMail] = useState("");
    const [cnic, setCnic] = useState("");
    const [fullname, setFullname] = useState("");
    const [password, setPassword] = useState("");
    const [home, setHome] = useState("");
    const [departure, setDeparture] = useState("");
    const [qualification, setQualification] = useState("");
    const [skills, setSkills] = useState("");
 
    const[maker,setMaker] =useState(false);
    return(
        
   
        <div > 
    {/* Email Address */}
        <Input_Texts type= {"email"} id= {"email"} name= {"email"} onChange = {(e)=>{setEmail(e.target.value)}} value= {email} palceholder={"Email Address"} maxLength={"50"} pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"} name_1={"Email Address"} statement={"Please provide a valid email address"}/>
   
      {/* Cnic */}
      <Input_Texts type= {"tel"} id= {"cnic"} name= {"cnic"} onChange = {(e)=>{setCnic(e.target.value)}} value= {cnic} palceholder={"Cnic"} maxLength={"13"} pattern={"[0-9]{13}"} name_1={"Cnic"} statement={"Please provide a valid Cnic"}/>

 {/* Full Name */}
      <Input_Texts type= {"text"} id= {"fullname"} name= {"fullname"} onChange = {(e)=>{setFullname(e.target.value)}} value= {fullname} palceholder={"Full Name"} maxLength={"50"} pattern={"[A-Za-z\s]{3,50}"} name_1={"Full Name"} statement={"Please provide your Full Name"}/>
      
       {/* Password */}
      <Input_Texts type= {maker===true?'text' : 'password'}  id= {"password"} name= {"password"} onChange = {(e)=>{setPassword(e.target.value)}} value= {password} palceholder={"Password"} maxLength={"20"} pattern={"[A-Za-z0-9]{8,20}"} name_1={"Password"} statement={"Please provide a valid Password"}
    />
    
     {/* Show Password Hide Password Button */}
       <Password_button onClick={()=> setMaker(!maker)}  {...maker ===true? {isActive:true}   : {isActive:false}} />
                                                  
    {/* Mailing Address */}

    <Input_Texts type= {"text"} id= {"adr_mail"} name= {"adr_mail"} onChange = {(e)=>{setMail(e.target.value)}} value= {mail} palceholder={"Mailing Address"} maxLength={"50"} pattern={"[A-Za-z0-9]{3,50}"} name_1={"Mailing Address"} statement={"Please provide correct Mailing Address"}/>
    
  {/*Home Address */}
    <Input_Texts type= {"text"} id= {"adr_home"} name= {"adr_home"} onChange = {(e)=>{setHome(e.target.value)}} value= {home} palceholder={"Home Address"} maxLength={"50"} pattern={"[A-Za-z0-9]{3,50}"} name_1={"Home Address"} statement={"Please provide correct Home Address"}/>
       
 {/*Contract Expiry Date */}
 <Input_Texts type= {"date"} id= {"departure"} name= {"departure"} onChange = {(e)=>{setDeparture(e.target.value)}} value= {departure} palceholder={"Contract Expiry Date"} maxLength={"50"} pattern={"[0-9]{0,50}"} name_1={"Contract Expiry Date"} statement={"Please provide your Contract Expiry Date"}/>
       
 {/*Qualification */}
 <Input_Texts type= {"text"} id= {"qualification"} name= {"qualification"} onChange = {(e)=>{setQualification(e.target.value)}} value= {qualification} palceholder={"Qualification"} maxLength={"50"} pattern={"[A-Za-z0-9]{2,50}"} name_1={"Qualification"} statement={"Please provide your Qualification"}/>
        
        {/*Skills */}
        <Input_Texts type= {"text"} id= {"Skills"} name= {"Skills"} onChange = {(e)=>{setSkills(e.target.value)}} value= {skills} palceholder={"Skills"} maxLength={"50"} pattern={"[A-Za-z0-9]{0,50}"} name_1={"Skills"} statement={"Please provide your Skills"}/>
        
  
   
        </div>
    )
}
export default Input_Text_Container

