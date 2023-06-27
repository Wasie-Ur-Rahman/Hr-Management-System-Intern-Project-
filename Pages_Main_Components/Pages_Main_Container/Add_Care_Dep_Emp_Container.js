import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import Input_Text_Container from "../Add_Care_Dep_Employees/Input_Text_Container";
import Main_Button_Container from "../Add_Care_Dep_Employees/Main_Button_Container";
const Add_Care_Dep_Emp_Container = () => 
{
  
  const [d_id, setDid] = useState("");
    const [eid, setEid] = useState("");
    

  return(
    <div >
          
        <Input_Text_Container setDid={setDid} d_id={d_id}  setEid={setEid}  eid={eid}/>
         {console.log("Dep Id" , d_id)}
      <Main_Button_Container d_id={d_id} eid={eid}/>
    </div>
  )
}
export default Add_Care_Dep_Emp_Container
