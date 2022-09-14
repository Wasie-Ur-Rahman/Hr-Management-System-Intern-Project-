import { supabase } from "../database/Database";
import React from "react";
import { useState } from "react";
import { Modal, Button } from "antd";
import "antd/dist/antd.css";
import { useRouter } from "next/router";

export default function DepEmp () {
  const [d_id, setDid] = useState("");
  const [eid, setEid] = useState("");

  const handleDid = (e) => {
    setDid(e.target.value);
  };
  const handleEid = (e) => {
    setEid(e.target.value);
  };

  async function handleSubmit() {
    insert(d_id, eid);
  }

  async function insert(d_id, eid) {
    const { data1, error1 } = await supabase
      .from("departments")
      .select("*")
      .eq("dep_id", d_id);
    const { data, error } = await supabase
      .from("employees")
      .select("*")
      .eq("emp_id", eid);
    console.log("Check");
    console.log(data1);
    console.log(data);
    if (error1 || error) {
      console.log(error1);
      console.log(error);
    } else {
      console.log("Yes");
      const { data, error } = await supabase
        .from("department_employees")
        .insert([{ dep_id: d_id, emp_id: eid }]);
      console.log("Yes1");
      console.log(data);
      if (error) {
        console.log("No");
        console.log(error);
      }
    }
  }

  return (
    <div>
      Department Id
      <input
        type="text"
        id="did"
        name="did"
        onChange={handleDid}
        value={d_id}
        className="  input peer placeholder-transparent rounded-md focus:ring-1 focus:ring-[#3D4E42] h-10  w-full border border-double  border-white focus:border-[#3D4E42]  outline-none   text-lg font-normal p-2 "
        placeholder="Department Id"
        autoComplete="off"
        required
      />
      Employee Id
      <input
        type="text"
        id="eid"
        name="eid"
        onChange={handleEid}
        value={eid}
        className="  input peer placeholder-transparent rounded-md focus:ring-1 focus:ring-[#3D4E42] h-10  w-full border border-double  border-white focus:border-[#3D4E42]  outline-none   text-lg font-normal p-2 "
        placeholder="Employee Id"
        autoComplete="off"
        required
      />
      <button
        className="rounded-md   bg-white hover:bg-[#465B4D]  w-52 h-10 text-lg font-semibold btn hover:text-[#5EAC74]  text-black  "
        onClick={handleSubmit}
        type="submit"
      >
        {" "}
        Add Department Employee <br />
      </button>
    </div>
  );
}
