import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import Input_Text_Container from "../Care_Dep_Info_Components/Input_Text_Container";
import Main_Button_Container from "../Care_Dep_Info_Components/Main_Button_Container";
const Add_Care_Dep_Container = () => 
{
  
  const [dname, setDname] = useState("");
    const [Mid, setMid] = useState("");
    

  return(
    <div >
          
        <Input_Text_Container setDname={setDname} dname={dname}  setMid={setMid} Mid={Mid}/>
         {console.log("Depname" , dname)}
      <Main_Button_Container dname={dname} Mid={Mid}/>
    </div>
  )
}
export default Add_Care_Dep_Container
