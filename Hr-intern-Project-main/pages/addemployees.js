import { supabase } from '../database/Database'
import React from "react";
import  { useState } from "react";
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';
import { useRouter } from "next/router";
const data_saver=[];
const url_saver=[];
const url_saver_1=[];
const data_saver_1=[];
let cnic_front_saver;
let cnic_back_saver;
export default function Addemployees() {
 
 
 
 
 
  const router =useRouter();
  const [email, setEmail] = useState("");
  const [mail, setMail] = useState("");
  const [home, setHome] = useState("");
  const [qualification, setQualification] = useState("");
  const [skills, setSkills] = useState("");
  const [departure, setDeparture] = useState("");
  const [cnic, setCnic] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  

  const handleFullname = (e) => {
    setFullname(e.target.value);
  }
  const handleCnic = (e) => {
    setCnic(e.target.value);
  }
  const handleMail = (e) => {
    setMail(e.target.value);
  }
  const handleHome = (e) => {
    setHome(e.target.value);
  }
  const handleQualification = (e) => {
    setQualification(e.target.value);
  }
  const handleSkills = (e) => {
    setSkills(e.target.value);
  }
  const handleDeparture = (e) => {
    setDeparture(e.target.value);
  }
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
   <div>
      Cnic
           <input type="tel" id="cnic" name="cnic"  onChange={handleCnic} value={cnic} className="  input peer placeholder-transparent rounded-md focus:ring-1 focus:ring-[#3D4E42] h-10  w-full border border-double  border-white focus:border-[#3D4E42]  outline-none   text-lg font-normal p-2 "
         placeholder="Cnic" autoComplete="off" pattern="[0-9]{13}" required
                    />
                  Full Name
                       <input type="text" id="fullname" name="fullname"   onChange={handleFullname} value={fullname} className="  input peer placeholder-transparent rounded-md focus:ring-1 focus:ring-[#3D4E42] h-10  w-full border border-double  border-white focus:border-[#3D4E42]  outline-none   text-lg font-normal p-2 "
 placeholder="Full Name" autoComplete="off" pattern="[A-Za-z\s]{0,50}" required/>
      Email
<input type="text" id="email" name="email" onChange={handleEmail} value={email} className="  input peer placeholder-transparent rounded-md focus:ring-1 focus:ring-[#3D4E42] h-10  w-full border border-double  border-white focus:border-[#3D4E42]  outline-none   text-lg font-normal p-2 "
 placeholder="Email" autoComplete="off" pattern="[A-Za-z\s]{0,150}" required/>
  Password
  <input type="password" id="password"name="password"  onChange={handlePassword} value={password} className=" input peer placeholder-transparent rounded-md focus:ring-1 focus:ring-[#3D4E42] h-10 w-full border border-double  border-white focus:border-[#3D4E42]  outline-none   text-lg font-normal p-2 "
 placeholder="Password" autoComplete="off" minLength={8} required/>
  
  Adress Mail
<input type="text" id="adr_mail" name="adr_mail"  onChange={handleMail} value={mail} className="  input peer placeholder-transparent rounded-md focus:ring-1 focus:ring-[#3D4E42] h-10  w-full border border-double  border-white focus:border-[#3D4E42]  outline-none   text-lg font-normal p-2 "
 placeholder="Address Mail" autoComplete="off"  required/>
  Address Home
<input type="text" id="adr_home" name="adr_home"  onChange={handleHome} value={home} className="  input peer placeholder-transparent rounded-md focus:ring-1 focus:ring-[#3D4E42] h-10  w-full border border-double  border-white focus:border-[#3D4E42]  outline-none   text-lg font-normal p-2 "
 placeholder="Address Home" autoComplete="off"  required/>
Departure
<input type="date" id="departure" name="departure"  onChange={handleDeparture} value={departure} className=" bg-zinc-900  input peer placeholder-transparent rounded-md focus:ring-1 focus:ring-[#3D4E42] h-10  w-full border border-double  border-white focus:border-[#3D4E42]  outline-none   text-lg font-normal p-2 "
 placeholder="Departure" autoComplete="off"  required/>
Qualification
<input type="text" id="qulaification" name="qulaification"  onChange={handleQualification} value={qualification} className="  input peer placeholder-transparent rounded-md focus:ring-1 focus:ring-[#3D4E42] h-10  w-full border border-double  border-white focus:border-[#3D4E42]  outline-none   text-lg font-normal p-2 "
 placeholder="Qulaification" autoComplete="off"  required/>
Skills
<input type="text" id="Skills" name="Skills"  onChange={handleSkills} value={skills}className="  input peer placeholder-transparent rounded-md focus:ring-1 focus:ring-[#3D4E42] h-10  w-full border border-double  border-white focus:border-[#3D4E42]  outline-none   text-lg font-normal p-2 "
 placeholder="Skills" autoComplete="off"  required/>
  
  {/* cnic front */}
  Cnic Front
  <input
        type="file" accept="image/*" className="block w-auto text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
       id="file_input"
        onChange={(e) => {
          handle_cnic_front(e); 
        }}
      />
Cnic Back
{/* cnic back */}
<input
        type="file" accept="image/*" className="block w-auto text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
       id="file_input"
        onChange={(e) => {
          handle_cnic_back(e); 
        }}
      />
  
{/* certification */}
Certification
  <input
        type="file" accept=".pdf" className="block w-auto text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
       id="file_input"
        onChange={(e) => {
          handle_certification(e);
        }}
        multiple required
      />

      {/* degree */}
      Degree
  <input
        type="file" accept=".pdf" className="block w-auto text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
       id="file_input"
        onChange={(e) => {
          handle_degree(e)
        }}
        multiple required
      />

<button className="rounded-md   bg-white hover:bg-[#465B4D]  w-52 h-10 text-lg font-semibold btn hover:text-[#5EAC74]  text-black  " onClick={handleSubmit} type="submit"> Add Employee <br /></button>
  
  
  
   </div>

   
  )
  
  async function handle_cnic_front (e)
  {
  
    let file;

    if (e.target.files) {
      file = e.target.files[0];
    }

    const { data, error } = await supabase.storage
  .from("cnic.front")
  .upload("public/" + file?.name,file , {
    cacheControl: '3600',
    upsert: false,
  })
  if (data) {
    console.log(data);
  } else if (error) {
    console.log(error);
  }

//  const { publicURL } = supabase.storage.from('cnic.font').getPublicUrl("public/" +file?.name)
const { publicURL } = supabase.storage.from('cnic.front').getPublicUrl(`public/${file.name}`)
  console.log(publicURL);
  cnic_front_saver=publicURL;
  }


  async function handle_cnic_back (e)
  {
  
    let file;

    if (e.target.files) {
      file = e.target.files[0];
    }

    const { data, error } = await supabase.storage
  .from("cnic.back")
  .upload("public/" + file?.name,file , {
    cacheControl: '3600',
    upsert: false,
  })
  if (data) {
    console.log(data);
  } else if (error) {
    console.log(error);
  }

//  const { publicURL } = supabase.storage.from('cnic.font').getPublicUrl("public/" +file?.name)
const { publicURL } = supabase.storage.from('cnic.back').getPublicUrl(`public/${file.name}`)
  console.log(publicURL);
  cnic_back_saver = publicURL;
  }
  async function handle_certification (e)
{
  console.log(e.target.files);
  console.log("Hello");
  console.log(e.target.files.length);
  const file = [] ;

  for(let i=0; i<e.target.files.length;i++)
  {
    if (e.target.files) {
      file[i] = e.target.files[i];
      console.log(123);
      console.log(file[i]);
    }
  }
  console.log(2456);
  console.log(file);
  
for(let i=0;  i<e.target.files.length;i++)
{
  const { data, error } = await supabase.storage
.from("certification")
.upload("public/" + file[i]?.name,file[i] , {
  cacheControl: '3600',
  upsert: false,
})
data_saver[i]=data;
if (data) {
  //console.log(data);
  console.log(986);
console.log(data_saver[i]);
} else if (error) {
  console.log(error);
}
}
console.log(data_saver);

//  

for(let i=0;  i<e.target.files.length;i++)
{
  const { publicURL } = supabase.storage.from('certification').getPublicUrl("public/" +file[i]?.name)
url_saver[i]=publicURL;
console.log(url_saver[i]);
console.log(33333)
}
console.log(url_saver);
}


async function handle_degree (e)
{
  console.log(e.target.files);
  console.log("Hello");
  console.log(e.target.files.length);
  const file = [] ;

  for(let i=0; i<e.target.files.length;i++)
  {
    if (e.target.files) {
      file[i] = e.target.files[i];
      console.log(123);
      console.log(file[i]);
    }
  }
  console.log(2456);
  console.log(file);
  
for(let i=0;  i<e.target.files.length;i++)
{
  const { data, error } = await supabase.storage
.from("degree")
.upload("public/" + file[i]?.name,file[i] , {
  cacheControl: '3600',
  upsert: false,
})
data_saver_1[i]=data;
if (data) {
  //console.log(data);
  console.log(986);
console.log(data_saver_1[i]);
} else if (error) {
  console.log(error);
}
}
console.log(data_saver_1);



for(let i=0;  i<e.target.files.length;i++)
{
  const { publicURL } = supabase.storage.from('degree').getPublicUrl("public/" +file[i]?.name)
url_saver_1[i]=publicURL;
console.log(url_saver_1[i]);
console.log(33333)
}
console.log(url_saver_1);
}

async function handleSubmit()
{
  signUp(email , password ,fullname , cnic ,mail ,home ,qualification ,skills ,departure , cnic_front_saver , cnic_back_saver ,url_saver , url_saver_1);
}

async function signUp(email , password ,fullname , cnic ,mail ,home ,qualification ,skills ,departure , cnic_front_saver , cnic_back_saver ,url_saver , url_saver_1) {
  const { user, error } = await supabase.auth.signUp({ email, password });
  if (error) {
    console.log(error);
    console.log("Hello");
    console.log(password);
    console.log(email);
  } else  {
     console.log(user)
    const { data,error } = await supabase
      .from("employees")
      .insert([{ personal_email: email, emp_password: password ,emp_cnic :cnic ,emp_fullname : fullname ,addr_mail :mail , addr_home :home ,emp_qualification : qualification ,emp_skills :skills , departure_on :departure , cnic_front :cnic_front_saver , cnic_back :cnic_back_saver ,certification : url_saver , degree : url_saver_1 ,emp_id :user.id }]);
    if (error) {
      console.log(error);
    }
    console.log("yoo")
    console.log(data)
   
    
  }
}
}

