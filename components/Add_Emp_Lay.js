import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload } from "antd";
import Success from "./Success";
import Unsuccess from "./Unsuccess";
import { supabase } from "../database/Database";
const data_saver = [];
const url_saver = [];
const url_saver_1 = [];
const data_saver_1 = [];
let cnic_front_saver;
let cnic_back_saver;
let key_word;
export default function Add_Emp_Lay() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [mail, setMail] = useState("");
  const [home, setHome] = useState("");
  const [qualification, setQualification] = useState("");
  const [skills, setSkills] = useState("");
  const [departure, setDeparture] = useState("");
  const [cnic, setCnic] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [show, setShow] = useState(false);
  const [click, setClick] = useState(false);
  const [click1, setClick1] = useState(false);
  const [open, setOpen] = useState(false);
  const [show1, setShow1] = useState(false);
  const [setter, showSetter] = useState(false);

  const handleFullname = (e) => {
    setFullname(e.target.value);
  };
  const handleCnic = (e) => {
    setCnic(e.target.value);
  };
  const handleMail = (e) => {
    setMail(e.target.value);
  };
  const handleHome = (e) => {
    setHome(e.target.value);
  };
  const handleQualification = (e) => {
    setQualification(e.target.value);
  };
  const handleSkills = (e) => {
    setSkills(e.target.value);
  };
  const handleDeparture = (e) => {
    setDeparture(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleIcon = () => {
    setShow(!show);
  };
  const handleClick = () => {
    setClick(!click);
  };
  const handleClick1 = () => {
    setClick1(!click1);
  };
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleShow1 = () => {
    setShow1(!show1);
  };

  async function btn_click(e) {
    myFunction();
    handleIcon(e);
  }

  return (
    <div className=" flex flex-row h-[1500px] w-screen  bg-[#ECEBEB] relative justify-center top-36  ">
      <div className="flex flex-col rounded-lg max-h-fit w-[900px] bg-[#ECEBEB] shadow-md shadow-stone-800 items-center">
        <div className="flex flex-col rounded-lg h-full w-11/12  items-center">
          {/* <div className="flex flex-row h-16 w-full rounded-lg bg-slate-700 justify-center items-center font-semibold text-2xl"> <p>Add Employees</p></div> */}
          <div className="flex flex-col w-3/6 h-full justify-evenly bg-[#ECEBEB] items-center font-semibold text-base  ">
            <div className="relative w-full   flex-row  justify-center  ">
              <input
                type="email"
                id="email"
                name="email"
                onChange={(handleEmail)}
                value={email}
                className=" input peer placeholder-transparent rounded-md focus:ring-1 focus:ring-[#4E4E4E] h-10 w-full border border-double  border-white focus:border-[#4E4E4E]  outline-none   text-lg font-normal p-3 "
                placeholder="Email address"
                autoComplete="on"
                required
              />
              <label className=" absolute left-0 -top-5 text-black text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-6 peer-focus:text-gray-600 peer-focus:text-sm">
                Email Address
              </label>
              <p className=" invisible peer-invalid:visible text-red-800 text-sm  ">
                Please provide a valid email address.
              </p>
            </div>

            <div className="relative w-full   flex-row  justify-center  ">
              <input
                type="cnic"
                id="cnic"
                name="cnic"
                onChange={handleCnic}
                value={cnic}
                className=" input peer placeholder-transparent rounded-md focus:ring-1 focus:ring-[#4E4E4E] h-10 w-full border border-double  border-white focus:border-[#4E4E4E]  outline-none   text-lg font-normal p-3 "
                placeholder="Cnic"
                autoComplete="on"
                required
              />
              <label className=" absolute left-0 -top-5 text-black text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-6 peer-focus:text-gray-600 peer-focus:text-sm">
                Cnic
              </label>
              <p className=" invisible peer-invalid:visible text-red-800 text-sm  ">
                Please provide your Cnic.
              </p>
            </div>

            <div className="relative w-full   flex-row  justify-center  ">
              <input
                type="text"
                id="fullname"
                name="fullname"
                onChange={handleFullname}
                value={fullname}
                className=" input peer placeholder-transparent rounded-md focus:ring-1 focus:ring-[#4E4E4E] h-10 w-full border border-double  border-white focus:border-[#4E4E4E]  outline-none   text-lg font-normal p-3 "
                placeholder="Full Name"
                autoComplete="on"
                pattern="[A-Za-z\s]{0,50}"
                required
              />
              <label className=" absolute left-0 -top-5 text-black text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-6 peer-focus:text-gray-600 peer-focus:text-sm">
                Full Name
              </label>
              <p className=" invisible peer-invalid:visible text-red-800 text-sm  ">
                Please provide your Full Name.
              </p>
            </div>

            <div className="relative w-full   flex-row  justify-center  ">
              <input
                id="password"
                name="password"
                onChange={handlePassword}
                value={password}
                className={` input peer placeholder-transparent rounded-md focus:ring-1 focus:ring-[#4E4E4E] h-10 w-full border border-double  border-white focus:border-[#4E4E4E]  outline-none   text-lg font-normal p-3 "  `}
                placeholder="Password"
                autoComplete="on"
                minLength={8}
                required
              />

              <button id="button1" className="" onClick={btn_click}>
                {show === false ? (
                  <img
                    src="show.svg"
                    height={20}
                    width={20}
                    className="absolute -top-[-10px] left-96"
                  />
                ) : (
                  <img
                    src="hide.svg"
                    height={20}
                    width={20}
                    className="absolute -top-[-10px] left-96"
                  />
                )}
              </button>

              <label className=" absolute left-0 -top-5 text-black text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-6 peer-focus:text-gray-600 peer-focus:text-sm">
                Password
              </label>
              <p className=" invisible peer-invalid:visible text-red-800 text-sm  ">
                Password should be of minimum 8 letters/digits.
              </p>
            </div>

            <div className="relative w-full   flex-row  justify-center  ">
              <input
                type="text"
                id="adr_mail"
                name="adr_mail"
                onChange={handleMail}
                value={mail}
                className=" input peer placeholder-transparent rounded-md focus:ring-1 focus:ring-[#4E4E4E] h-10 w-full border border-double  border-white focus:border-[#4E4E4E]  outline-none   text-lg font-normal p-3 "
                placeholder="Address Mail"
                autoComplete="off"
                required
              />
              <label className=" absolute left-0 -top-5 text-black text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-6 peer-focus:text-gray-600 peer-focus:text-sm">
                Address Mail
              </label>
              <p className=" invisible peer-invalid:visible text-red-800 text-sm  ">
                Please provide your Mailing Address.
              </p>
            </div>

            <div className="relative w-full   flex-row  justify-center  ">
              <input
                type="text"
                id="adr_home"
                name="adr_home"
                onChange={handleHome}
                value={home}
                className=" input peer placeholder-transparent rounded-md focus:ring-1 focus:ring-[#4E4E4E] h-10 w-full border border-double  border-white focus:border-[#4E4E4E]  outline-none   text-lg font-normal p-3 "
                placeholder="Address Home"
                autoComplete="off"
                required
              />
              <label className=" absolute left-0 -top-5 text-black text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-6 peer-focus:text-gray-600 peer-focus:text-sm">
                Address Home
              </label>
              <p className=" invisible peer-invalid:visible text-red-800 text-sm  ">
                Please provide your Home Address.
              </p>
            </div>

            <div className="relative w-full   flex-row  justify-center  ">
              <input
                type="date"
                id="departure"
                name="departure"
                onChange={handleDeparture}
                value={departure}
                className=" input peer placeholder-transparent rounded-md focus:ring-1 focus:ring-[#4E4E4E] h-10 w-full border border-double  border-white focus:border-[#4E4E4E]  outline-none   text-lg font-normal p-3 "
                placeholder="Departure"
                autoComplete="off"
                required
              />
              <label className=" absolute left-0 -top-5 text-black text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-6 peer-focus:text-gray-600 peer-focus:text-sm">
                Departure
              </label>
              <p className=" invisible peer-invalid:visible text-red-800 text-sm  ">
                Please provide your Departure Date.
              </p>
            </div>

            <div className="relative w-full   flex-row  justify-center  ">
              <input
                type="text"
                id="qualification"
                name="qulaification"
                onChange={handleQualification}
                value={qualification}
                className=" input peer placeholder-transparent rounded-md focus:ring-1 focus:ring-[#4E4E4E] h-10 w-full border border-double  border-white focus:border-[#4E4E4E]  outline-none   text-lg font-normal p-3 "
                placeholder="Qualification"
                autoComplete="off"
                required
              />
              <label className=" absolute left-0 -top-5 text-black text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-6 peer-focus:text-gray-600 peer-focus:text-sm">
                Qualification
              </label>
              <p className=" invisible peer-invalid:visible text-red-800 text-sm  ">
                Please provide your Qualification.
              </p>
            </div>

            <div className="relative w-full   flex-row  justify-center  ">
              <input
                type="text"
                id="Skills"
                name="Skills"
                onChange={handleSkills}
                value={skills}
                className=" input peer placeholder-transparent rounded-md focus:ring-1 focus:ring-[#4E4E4E] h-10 w-full border border-double  border-white focus:border-[#4E4E4E]  outline-none   text-lg font-normal p-3 "
                placeholder="Skills"
                autoComplete="off"
                required
              />
              <label className=" absolute left-0 -top-5 text-black text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-6 peer-focus:text-gray-600 peer-focus:text-sm">
                Skills
              </label>
              <p className=" invisible peer-invalid:visible text-red-800 text-sm  ">
                Please provide your Skills.
              </p>
            </div>

            {/* cnic front */}
            <div className="relative  flex-row   justify-center h-fit w-fit ">
              <input
                type="file"
                accept="image/*"
                className="block  peer placeholder-transparent w-auto text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input"
                onChange={(e) => {
                  handle_cnic_front(e);
                }}
                placeholder="Cnic Front"
                required
              />
              <label className=" absolute left-0 -top-5 text-black text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-6 peer-focus:text-gray-600 peer-focus:text-sm">
                Cnic Front
              </label>
              <p className=" invisible peer-invalid:visible text-red-800 text-sm  ">
                Please provide front side of your Cnic.
              </p>
            </div>
            {/* cnic back */}
            <div className="relative  flex-row   justify-center h-fit w-fit ">
              <input
                type="file"
                accept="image/*"
                className="block  peer placeholder-transparent w-auto text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input1"
                onChange={(e) => {
                  handle_cnic_back(e);
                }}
                placeholder="Cnic Back"
                required
              />
              <label className=" absolute left-0 -top-5 text-black text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-6 peer-focus:text-gray-600 peer-focus:text-sm">
                Cnic Back
              </label>
              <p className=" invisible peer-invalid:visible text-red-800 text-sm  ">
                Please provide back side of your Cnic.
              </p>
            </div>

            {/* certification */}
            <div className="relative  flex-row   justify-center h-fit w-fit ">
              <input
                type="file"
                accept=".pdf"
                className="block  peer placeholder-transparent w-auto text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input2"
                placeholder="Certification"
                onChange={(e) => {
                  handle_certification(e);
                }}
                multiple
                required
              />
              <label className=" absolute left-0 -top-5 text-black text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-6 peer-focus:text-gray-600 peer-focus:text-sm">
                Certification
              </label>
              <p className=" invisible peer-invalid:visible text-red-800 text-sm  ">
                Please provide Certification in pdf form.
              </p>
            </div>

            {/* degree */}

            <div className="relative  flex-row   justify-center h-fit w-fit ">
              <input
                type="file"
                accept=".pdf"
                className="block  peer placeholder-transparent w-auto text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input3"
                placeholder="Degree"
                onChange={(e) => {
                  handle_degree(e);
                }}
                multiple
                required
              />
              <label className=" absolute left-0 -top-5 text-black text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-6 peer-focus:text-gray-600 peer-focus:text-sm">
                Degree
              </label>
              <p className=" invisible peer-invalid:visible text-red-800 text-sm  ">
                {"Please provide Degree's in pdf form."}
              </p>
            </div>

            <button
              className={` rounded-md     w-52 h-10 text-lg font-semibold btn   " ${
                click
                  ? "bg-[#747474] &&  border-[#4E4E4E] && text-white"
                  : " bg-[#FFFFFF]  &&  border-[#4E4E4E] && text-black "
              }  `}
              onClick={handleSubmit}
              type="submit"
            >
              {" "}
              Add Employee <br />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`  h-[100vh] flex flex-row item  z-50 overflow-hidden fixed inset-0  transition ease-in-out  duration-1000 delay-1000 w-full bg-gray-100 opacity-95 justify-start items-center ${
          show1 ? "visible" : "hidden"
        }      text-xl `}
        onClick={() => setShow1(!show1)}
      >
        {setter === true ? <Success /> : <Unsuccess />}
      </div>

      <div>{}</div>
    </div>
  );

  function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  async function handle_cnic_front(e) {
    let file;

    if (e.target.files) {
      file = e.target.files[0];
    }

    const { data, error } = await supabase.storage
      .from("cnic.front")
      .upload("public/" + file?.name, file, {
        cacheControl: "3600",
        upsert: false,
      });
    if (data) {
      console.log(data);
    } else if (error) {
      console.log(error);
    }

    //  const { publicURL } = supabase.storage.from('cnic.font').getPublicUrl("public/" +file?.name)
    const { publicURL } = supabase.storage
      .from("cnic.front")
      .getPublicUrl(`public/${file.name}`);
    console.log(publicURL);
    cnic_front_saver = publicURL;
  }

  async function handle_cnic_back(e) {
    let file;

    if (e.target.files) {
      file = e.target.files[0];
    }

    const { data, error } = await supabase.storage
      .from("cnic.back")
      .upload("public/" + file?.name, file, {
        cacheControl: "3600",
        upsert: false,
      });
    if (data) {
      console.log(data);
    } else if (error) {
      console.log(error);
    }

    //  const { publicURL } = supabase.storage.from('cnic.font').getPublicUrl("public/" +file?.name)
    const { publicURL } = supabase.storage
      .from("cnic.back")
      .getPublicUrl(`public/${file.name}`);
    console.log(publicURL);
    cnic_back_saver = publicURL;
  }
  async function handle_certification(e) {
    console.log(e.target.files);
    console.log("Hello");
    console.log(e.target.files.length);
    const file = [];

    for (let i = 0; i < e.target.files.length; i++) {
      if (e.target.files) {
        file[i] = e.target.files[i];
        console.log(123);
        console.log(file[i]);
      }
    }
    console.log(2456);
    console.log(file);

    for (let i = 0; i < e.target.files.length; i++) {
      const { data, error } = await supabase.storage
        .from("certification")
        .upload("public/" + file[i]?.name, file[i], {
          cacheControl: "3600",
          upsert: false,
        });
      data_saver[i] = data;
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

    for (let i = 0; i < e.target.files.length; i++) {
      const { publicURL } = supabase.storage
        .from("certification")
        .getPublicUrl("public/" + file[i]?.name);
      url_saver[i] = publicURL;
      console.log(url_saver[i]);
      console.log(33333);
    }
    console.log(url_saver);
  }

  async function handle_degree(e) {
    console.log(e.target.files);
    console.log("Hello");
    console.log(e.target.files.length);
    const file = [];

    for (let i = 0; i < e.target.files.length; i++) {
      if (e.target.files) {
        file[i] = e.target.files[i];
        console.log(123);
        console.log(file[i]);
      }
    }
    console.log(2456);
    console.log(file);

    for (let i = 0; i < e.target.files.length; i++) {
      const { data, error } = await supabase.storage
        .from("degree")
        .upload("public/" + file[i]?.name, file[i], {
          cacheControl: "3600",
          upsert: false,
        });
      data_saver_1[i] = data;
      if (data) {
        //console.log(data);
        console.log(986);
        console.log(data_saver_1[i]);
      } else if (error) {
        console.log(error);
      }
    }
    console.log(data_saver_1);

    for (let i = 0; i < e.target.files.length; i++) {
      const { publicURL } = supabase.storage
        .from("degree")
        .getPublicUrl("public/" + file[i]?.name);
      url_saver_1[i] = publicURL;
      console.log(url_saver_1[i]);
      console.log(33333);
    }
    console.log(url_saver_1);
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
    handleClick();
    handleClick1();
    handleShow1();
    handler();
    setClick(false);
    setClick(false);
  }

  function handler() {
    if (
      email === "" ||
      password === "" ||
      fullname === "" ||
      cnic === "" ||
      mail === "" ||
      home === "" ||
      qualification === "" ||
      skills === "" ||
      departure === "" ||
      cnic_front_saver === "" ||
      cnic_back_saver === "" ||
      url_saver === "" ||
      url_saver_1 === ""
    ) {
      document.getElementById("email").value = "";
      document.getElementById("cnic").value = "";
      document.getElementById("fullname").value = "";
      document.getElementById("password").value = "";
      document.getElementById("adr_mail").value = "";
      document.getElementById("adr_home").value = "";
      document.getElementById("departure").value = "";
      document.getElementById("qualification").value = "";
      document.getElementById("Skills").value = "";
      document.getElementById("file_input").value = "";
      document.getElementById("file_input1").value = "";
      document.getElementById("file_input2").value = "";
      document.getElementById("file_input3").value = "";
      setEmail("");
      setCnic("");
      setFullname("");
      setPassword("");
      setMail("");
      setHome("");
      setDeparture("");
      setQualification("");
      setSkills("");
    } else {
      document.getElementById("email").value = "";
      document.getElementById("cnic").value = "";
      document.getElementById("fullname").value = "";
      document.getElementById("password").value = "";
      document.getElementById("adr_mail").value = "";
      document.getElementById("adr_home").value = "";
      document.getElementById("departure").value = "";
      document.getElementById("qualification").value = "";
      document.getElementById("Skills").value = "";
      document.getElementById("file_input").value = "";
      document.getElementById("file_input1").value = "";
      document.getElementById("file_input2").value = "";
      document.getElementById("file_input3").value = "";
      setEmail("");
      setCnic("");
      setFullname("");
      setPassword("");
      setMail("");
      setHome("");
      setDeparture("");
      setQualification("");
      setSkills("");
    }
  }
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

      showSetter(false);
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
      showSetter(true);
    }
    showSetter(false);
  }
}
