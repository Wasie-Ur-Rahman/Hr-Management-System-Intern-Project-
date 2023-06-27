import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import Input_Single_File_Container from "../Add_Care_Emp_Components/Input_Single_File_Container";
import Input_Multiple_File_Container from "../Add_Care_Emp_Components/Input_Multiple_File_Container";
import Input_Text_Container from "../Add_Care_Emp_Components/Input_Text_Container";
import Main_Button_Container from "../Add_Care_Emp_Components/Main_Button_Container";
const Add_Care_Emp_Container = () => 
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
    const [cnic_back_saver,SetCnicBack] = useState("")
    const[cnic_front_saver,SetCnicFront]=useState("")
    const [url_saver,Seturlsaver] = useState("");
    const [url_saver_1,Seturl1saver] = useState("");
  return(
    <div >
          {console.log("front" , cnic_front_saver)}
        <Input_Text_Container setEmail={setEmail}  email={email} setMail={setMail} mail={mail} cnic={cnic} setCnic={setCnic} fullname={fullname} setFullname={setFullname} password={password} setPassword={setPassword}  home={home} setHome={setHome} departure={departure} setDeparture={setDeparture} qualification={qualification} setQualification={setQualification} skills={skills} setSkills={setSkills}/>
         {console.log("lgc" , email)}
         <Input_Single_File_Container cnic_back_saver={cnic_back_saver} SetCnicBack={SetCnicBack} cnic_front_saver={cnic_front_saver} SetCnicFront={SetCnicFront}/>
        <Input_Multiple_File_Container url_saver={url_saver} Seturlsaver={Seturlsaver} url_saver_1={url_saver_1} Seturl1saver={Seturl1saver} />
      <Main_Button_Container  url_saver={url_saver} url_saver_1={url_saver_1} email={email} mail={mail} cnic={cnic} fullname={fullname} password={password}  home={home}  departure={departure} qualification={qualification} skills={skills} cnic_back_saver={cnic_back_saver} cnic_front_saver={cnic_front_saver}/>
    </div>
  )
}
export default Add_Care_Emp_Container
