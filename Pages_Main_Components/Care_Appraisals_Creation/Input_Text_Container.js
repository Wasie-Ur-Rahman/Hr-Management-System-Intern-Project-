import React from "react";
import Input_Texts from "../../components/Text_Fields/Input_Texts";


const Input_Text_Container =({ startDate, endDate, setStartDate ,setendDate}) =>
{

    return(
        <div  className="mb-4"> 
 
        {/*Appraisal Starting Date */}
 <Input_Texts height={"[32px]"}  type= {"date"} id= {"apr_start"} name= {"apr_start"} onChange = {(e)=>{setStartDate(e.target.value)}} value= {startDate} palceholder={"Appraisal Start Date"} maxLength={"50"} pattern={"[0-9]{0,50}"} name_1={"Appraisal Start Date"} statement={"Please provide your Appraisal Starting Date"}/>
   
      {/*Appraisal Ending Date */}
      <Input_Texts height={"[32px]"}  type= {"date"} id= {"apr_end"} name= {"apr_end"} onChange = {(e)=>{setendDate(e.target.value)}} value= {endDate} palceholder={"Appraisal End Date"} maxLength={"50"} pattern={"[0-9]{0,50}"} name_1={"Appraisal End Date"} statement={"Please provide your Apprasial Expiry Date"}/>

 
        </div>
       
    )
    
}
export default Input_Text_Container

