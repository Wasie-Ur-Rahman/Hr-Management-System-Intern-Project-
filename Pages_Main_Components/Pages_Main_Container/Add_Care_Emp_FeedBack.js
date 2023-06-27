import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import Input_Text_Container from "../Care_FeedBack_Response/Input_Text_Container";
import Main_Button_Container from "../Care_FeedBack_Response/Main_Button_Container";
const Add_Care_Emp_FeedBack_Container = () => 
{
  
    const [response,setResponse]=useState("")

  return(
    <div >
          
        <Input_Text_Container response={response} setResponse={setResponse}/>
         {console.log("Appraisal Response" , response)}
      <Main_Button_Container response={response} />
    </div>
  )
}
export default Add_Care_Emp_FeedBack_Container
