import React from "react";
import { useRouter } from "next/router";
import Main_Container from "./Main Container";
import Main_Button from "./Main_Button";
import { Context } from "./Input_Text_Container";
import { useContext } from "react";
import { useState } from "react";
import { Context1 } from "./Input_Single_File_Container";
import { Context2 } from "./Input_Multiple_File_Container";
import { supabase } from "../../database/Database";
const Main_Button_Container = ({}) =>
{
    const {cnic_back_saver,cnic_front_saver}=useContext(Context1);
    const { email,mail,cnic,fullname,password,home,qualification,skills,departure} = useContext(Context);
    const{url_saver,url_saver_1} = useContext(Context2)
    const [property , setProperty] = useState(false);

    return(
        <div className="w-full flex  flex-col justify-evenly items-center h-20 ">
            
                <Main_Button shape={"md"}  name={"Add C@re Employee"} onClick={handleSubmit}  {...property===true? {click:true} : {click:false} }  {...property===true? {click1:true} : {click1:false} } type={"submit"} />
        
        {console.log("fullname",fullname)}
        </div>
    )
    async function handleSubmit() {
        signUp(
          email,
          password,
          fullname,
          cnic,
          mail,
          home,
          qualification,
          skills,
          departure,
          cnic_front_saver,
          cnic_back_saver,
          url_saver,
          url_saver_1
        );
        setProperty(!property)
        // handler();
       
      }
    
    
    //   function handler() {
    //     if (
    //       email === "" ||
    //       password === "" ||
    //       fullname === "" ||
    //       cnic === "" ||
    //       mail === "" ||
    //       home === "" ||
    //       qualification === "" ||
    //       skills === "" ||
    //       departure === "" ||
    //       cnic_front_saver === "" ||
    //       cnic_back_saver === "" ||
    //       url_saver === "" ||
    //       url_saver_1 === ""
    //     ) {
        
    //       setEmail("");
    //       setCnic("");
    //       set
    //       setFullname("");
    //       setPassword("");
    //       setMail("");
    //       setHome("");
    //       setDeparture("");
    //       setQualification("");
    //       setSkills("");
    //     } else {
    //       setEmail("");
    //       setCnic("");
    //       setFullname("");
    //       setPassword("");
    //       setMail("");
    //       setHome("");
    //       setDeparture("");
    //       setQualification("");
    //       setSkills("");
    //     }
    //   }
      async function signUp(
        email,
        password,
        fullname,
        cnic,
        mail,
        home,
        qualification,
        skills,
        departure,
        cnic_front_saver,
        cnic_back_saver,
        url_saver,
        url_saver_1
      ) {
        const { user, error } = await supabase.auth.signUp({ email, password });
        if (error) {
          console.log(error);
          console.log("Hello");
          console.log(password);
          console.log(email);
    
        
        } else {
          console.log(user);
          const { data, error } = await supabase
            .from("employees")
            .insert([
              {
                personal_email: email,
                emp_password: password,
                emp_cnic: cnic,
                emp_fullname: fullname,
                addr_mail: mail,
                addr_home: home,
                emp_qualification: qualification,
                emp_skills: skills,
                departure_on: departure,
                cnic_front: cnic_front_saver,
                cnic_back: cnic_back_saver,
                certification: url_saver,
                degree: url_saver_1,
                emp_id: user.id,
              },
            ]);
          if (error) {
            console.log(error);
          }
          console.log("yoo");
          console.log(data);
      
        }
       
      }
    
}



export default Main_Button_Container