import React from "react";

import Main_Button from "../../components/Buttons/Main_Button";

import { useState } from "react";

import { supabase } from "../../database/Database";

import Popup from "../../components/Popups/Popup";
import { GoTrueClient } from "@supabase/supabase-js";
const Main_Button_Container = ({d_id ,eid }) =>
{
    
    const [property , setProperty] = useState(false);
    const [popup,setPopup] = useState(false);
    const [click ,SetClick] = useState(false);
    console.log("Department Id",d_id)
    console.log("Employee Id",eid)
 

    return(
        <div className="w-full flex  flex-col justify-evenly items-center h-20 ">
            
                <Main_Button shape={"md"}  name={"Add C@re Department"} onClick={handleSubmit}  {...property===true? {click:true} : {click:false} }  {...property===true? {click1:true} : {click1:false} } type={"submit"} />
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
        insert(d_id, eid);
        setProperty(!property)
        handle_popup()

    }

    async function insert(d_id, eid) {
        const { data1, error1 } = await supabase
          .from("departments")
          .select("*")
          .eq("dep_id", d_id);
        const { data, error } = await supabase
          .from("employees")
          .select("*")
          .eq("emp_id", eid);
        console.log("Check");
        console.log(data1);
        console.log(data);
        if (error1 || error) {
          console.log(error1);
          console.log(error);
          setPopup(false);
        } else {
          console.log("Yes");
          const { data, error } = await supabase
            .from("department_employees")
            .insert([{ dep_id: d_id, emp_id: eid }]);
          console.log("Yes1");
          console.log(data);
          if (error) {
            console.log("No");
            console.log(error);
            setPopup(false);
          }
          else
          {
            setPopup(true)
            
          }
        }
      }
    
    
 
        
       
      
    
}



export default Main_Button_Container