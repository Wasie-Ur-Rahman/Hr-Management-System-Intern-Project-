import React from "react";

import Main_Button from "../../components/Buttons/Main_Button";

import { useState } from "react";

import { supabase } from "../../database/Database";

import Popup from "../../components/Popups/Popup";
const Main_Button_Container = ({email , password ,fullname , cnic ,mail , home , qualification ,skills ,departure , cnic_front_saver ,cnic_back_saver , url_saver=[] ,url_saver_1=[]}) =>
{
    
    const [property , setProperty] = useState(false);
    const [popup,setPopup] = useState(false);
    const [click ,SetClick] = useState(false);
    console.log("email",email)
    console.log("mail",mail)
    console.log("Cnic Front Saver",cnic_front_saver)
    console.log("Cnic Back Saver" , cnic_back_saver) 
    console.log("url_saver_1",url_saver_1);
    console.log("url_saver",url_saver);

    return(
        <div className="w-full flex  flex-col justify-evenly items-center h-20 ">
            
                <Main_Button shape={"md"}  name={"Add C@re Employee"} onClick={handleSubmit}  {...property===true? {click:true} : {click:false} }  {...property===true? {click1:true} : {click1:false} } type={"submit"} />
        
                <Popup   onClick={handle_popup} {...click===true? {show1 : true} :{ show1:false}}  name={popup===true ? "Successfull" : "Unsuccessfull" } source={popup===true ? '/tic.svg' : '/cross.svg'} height={25} width={25} btn_name={popup===true ? 'Great ' : 'Try Again'} />
     
        </div>
    )

    async function handle_popup()
    {
      SetClick(!click);
      setPopup(false);
      
    }
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
        handle_popup()
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
          setPopup(false)
        
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
            setPopup(false)
            
          }
          else
          {
            setPopup(true)
            console.log("yoo");
            console.log(data);
          }
       
      
        }
       
      }
    
}



export default Main_Button_Container