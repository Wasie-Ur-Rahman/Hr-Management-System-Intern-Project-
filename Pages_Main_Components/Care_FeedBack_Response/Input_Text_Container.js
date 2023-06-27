import React from "react";
import Input_Texts from "../../components/Text_Fields/Input_Texts";


const Input_Text_Container =({ setResponse, response}) =>
{

    return(
        <div  className="mb-4"> 
 
        {/*Appraisal Id */}
 <Input_Texts height={"[32px]"}  type= {"text"} id= {"apr_id"} name= {"apr_id"} onChange = {(e) => setResponse(e.target.value)} value= {response} palceholder={"Appraisal Response"} maxLength={"50"} pattern={"[A-Za-z\s]{0,50}"} name_1={"Appraisal Response"} statement={"Please provide your Appraisal Response"}/>

        </div>
       
    )
    
}
export default Input_Text_Container

