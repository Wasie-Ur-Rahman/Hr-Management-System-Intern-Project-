import React from "react";

import Main_Button from "../../components/Buttons/Main_Button";

import { useState } from "react";

import { supabase } from "../../database/Database";

import Popup from "../../components/Popups/Popup";
import { GoTrueClient } from "@supabase/supabase-js";
const Main_Button_Container = ({ project_id ,employee_id }) =>
{
    
    const [property , setProperty] = useState(false);
    const [popup,setPopup] = useState(false);
    const [click ,SetClick] = useState(false);
    console.log("Project Id ",  project_id)
    console.log("Employee Id", employee_id)

    return(
        <div className="w-full flex  flex-col justify-evenly items-center h-20 ">
            
                <Main_Button shape={"md"}  name={"Add Project Employee"} onClick={handleSubmit}  {...property===true? {click:true} : {click:false} }  {...property===true? {click1:true} : {click1:false} } type={"submit"} />
        {console.log("popup",popup)}
        
        <Popup   onClick={handle_popup} {...click===true? {show1 : true} :{ show1:false}}  name={popup===true ? "Successfull" : "Unsuccessfull" } source={popup===true ? '/tic.svg' : '/cross.svg'} height={25} width={25} btn_name={popup===true ? 'Great ' : 'Try Again'} />
      
      </div>
              
     
       
    )
    async function handle_popup()
    {
      SetClick(!click);
      setPopup(false);
      
    }

   
    
    async function handleSubmit ()
    {
        information_gatherer()
        setProperty(!property)
        handle_popup()

    }
     



    async function information_gatherer ()
    {
        console.log("in")
        const { data, error } = await supabase
  .from('projects_employee')
  .insert([
    { proj_id:project_id  , emp_id : employee_id },
  ])

  console.log(data);
  if(error)
  {
    console.log(error);
    setPopup(false)
  }
   else{
    setPopup(true)
   }
    }
}



export default Main_Button_Container