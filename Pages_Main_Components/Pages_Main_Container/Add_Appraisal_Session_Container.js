import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import Input_Text_Container from "../Care_Appraisals_Creation/Input_Text_Container";
import Main_Button_Container from "../Care_Appraisals_Creation/Main_Button_Container";
const Add_Appraisal_Session_Container = () => 
{
  
    const [endDate, setendDate] = useState("");
    const [startDate, setStartDate] = useState("");

  return(
    <div >
          
        <Input_Text_Container setendDate={setendDate} endDate={endDate}  startDate={startDate} setStartDate={setStartDate}/>
         {console.log("Appraisal Start" , setStartDate)}
      <Main_Button_Container endDate={endDate} startDate={startDate}/>
    </div>
  )
}
export default Add_Appraisal_Session_Container
