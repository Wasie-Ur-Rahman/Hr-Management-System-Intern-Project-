import { supabase } from "../database/Database";
import React from "react";
import { useState } from "react";
import { Modal, Button } from "antd";
import "antd/dist/antd.css";
export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const confirm = Modal.confirm;
  return (
    <div className="h-screen w-screen flex flex-col bg-orange-700">
      SIGNUP
      <input
        type="email"
        id="email"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        className="bg-slate-600 input peer placeholder-transparent rounded-md focus:ring-1 focus:ring-[#3D4E42] h-10 w-full border border-double  border-white focus:border-[#3D4E42]  outline-none   text-lg font-normal p-2 "
        placeholder="Email address"
        autoComplete="on"
        value={email}
        requiredgit
      />
      <input
        type="Password"
        onChange={(e) => setPassword(e.target.value)}
        id="password"
        name="password"
        className=" bg-slate-600  input  peer placeholder-transparent rounded-md focus:ring-1 focus:ring-[#3D4E42] h-10 w-full border border-double  border-white focus:border-[#3D4E42]    outline-none peer p-2 "
        placeholder="Password"
        minLength="8"
        autoComplete="on"
        value={password}
        required
      />
      <button
        className="rounded-md   bg-slate-600 hover:bg-[#465B4D]  w-52 h-10 text-lg font-semibold btn hover:text-[#5EAC74]  text-black  "
        onClick={() => signUp(email, password)}
        type="submit"
      >
        Create Account <br />
      </button>
      <div className="flex flex-col items-end">
        <img src="HR 2.png" width={400} height={400} />
      </div>
    </div>
  );
}

async function signUp(email, password) {
  const { user, error } = await supabase.auth.signUp({ email, password });

  if (error) {
    errorfun();
  } else {
    success1();
  }
}

function errorfun() {
  Modal.error({
    title: "Unsuccessful",
    content: "Try Again",
  });
}

function success1() {
  Modal.success({
    title: "Sign Up Successful",
    content: "Kindly check your email for verification",
  });
}
