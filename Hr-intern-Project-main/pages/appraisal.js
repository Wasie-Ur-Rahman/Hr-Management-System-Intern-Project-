import React, { useState } from "react";
import { Modal } from "antd";
import "antd/dist/antd.css";
import { supabase } from "../database/Database";

function Appraisal() {
  const [endDate, setendDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());



  function errorfun() {
    Modal.error({
      title: "Unsuccessful",
      content: "Try Again",
    });
  }

  function success() {
    Modal.success({
      title: "Session Created",
      content: "Appraisal Created",
    });
  }

  const createSession = async () => {
    const { data, error } = await supabase
      .from("appraisals")
      .insert([{ start: startDate, end: endDate }]);

      if(error){
        errorfun()
      }
      else{
        success()
      }
  };
  const handleEndDate = (e) => {
    e.preventDefault();
    if (e != undefined) {
      setendDate(e.target.value);
    }
  };
  const handleStartDate = (e) => {
    e.preventDefault();
    if (e != undefined) {
      setStartDate(e.target.value);
    }
  };
  return (
    <div>
      select start Date
      <input
        type={"Date"}
        id="cnic"
        name="StartendDate"
        onChange={handleStartDate}
        value={startDate}
        className="  input peer placeholder-transparent rounded-md focus:ring-1 focus:ring-[#3D4E42] h-10  w-full border border-double  border-white focus:border-[#3D4E42]  outline-none   text-lg font-normal p-2 "
        required
      />
      select End Date
      <input
        type={"Date"}
        id="cnic"
        name="StartendDate"
        onChange={handleEndDate}
        value={endDate}
        className="  input peer placeholder-transparent rounded-md focus:ring-1 focus:ring-[#3D4E42] h-10  w-full border border-double  border-white focus:border-[#3D4E42]  outline-none   text-lg font-normal p-2 "
        required
      />
      <button
        className="  bg-transparent   hover:tracking-tighter text-[#DBE3D6]   w-full h-20 font-bold border-none transition ease-in-out duration-500 text-lg hover:text-[#5EAC74]"
        onClick={createSession}
      >
        Create new Appraisal Session
      </button>
    </div>
  );
}

export default Appraisal;
