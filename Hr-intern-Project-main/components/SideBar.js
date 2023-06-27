import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import Body from "./Body";
export default function SideBar()
{
    const[button , setButton] = useState(false);

    const Button = () => {
        setButton(!button);
      };

      const[button1 , setButton1] = useState(false);

      const Button1 = () => {
          setButton1(!button1);
        };

        const[button2 , setButton2] = useState(false);

      const Button2 = () => {
          setButton2(!button2);
        };

        const[button3 , setButton3] = useState(false);

      const Button3 = () => {
          setButton3(!button3);
        };

        const[button4 , setButton4] = useState(false);

      const Button4 = () => {
          setButton4(!button4);
        };

        const[button5 , setButton5] = useState(false);

      const Button5 = () => {
          setButton5(!button5);
        };

        const[button6 , setButton6] = useState(false);

      const Button6 = () => {
          setButton6(!button6);
        };

        const[button7 , setButton7] = useState(false);

      const Button7 = () => {
          setButton7(!button7);
        };

        const[button8 , setButton8] = useState(false);

      const Button8 = () => {
          setButton8(!button8);
        };

        const[button9 , setButton9] = useState(false);

      const Button9 = () => {
          setButton9(!button9);
        };

        const[button10 , setButton10] = useState(false);

      const Button10 = () => {
          setButton10(!button10);
        };

        const[button11 , setButton11] = useState(false);

      const Button11 = () => {
          setButton11(!button11);
        };

       


      const btn_click = () => {
        Button();
       
      };
      const btn_click1 = () => {
        Button1();
       
      };
      const btn_click2 = () => {
        Button2();
       
      };
      const btn_click3 = () => {
        Button3();
       
      };
      const btn_click4 = () => {
        Button4();
       
      };
      const btn_click5 = () => {
        Button5();
       
      };
      const btn_click6 = () => {
        Button6();
       
      };
      const btn_click7 = () => {
        Button7();
       
      };
      const btn_click8 = () => {
        Button8();
       
      };
      const btn_click9 = () => {
        Button9();
       
      };
      const btn_click10 = () => {
        Button10();
       
      };
      const btn_click11 = () => {
        Button11();
       
      };
    
      
    return(
        <div className="  flex flex-row h-screen w-screen">  
    <div className="   flex flex-col  w-[270px] left-[0.10rem]  h-5/6 bg-[#FFFFFF] border border-solid border-gray-300  justify-end">
        <div className="flex flex-col h-full w-full  justify-evenly">
        <button className={` flex flex-row font-semibold w-full h-[35px]  justify-start items-center "  ${
                  button
                    ? "bg-[#747474] && hover-bg-none  "
                    : "bg-[#E5E5E5] && hover:bg-[#929292]"
                }  ` } onClick={btn_click} >
          <div className="rounded-lg  w-[25px] h-[23px] bg-[#C4C4C4] m-1  "></div>
         <div className="flex flex-row w-full justify-center">
            Add Care Employees
         </div>
        </button>
       
        <button className={` flex flex-row w-[293px] h-[35px] font-semibold justify-start items-center "  ${
                  button1
                    ? "bg-[#747474] && hover-bg-none  "
                    : "bg-[#E5E5E5] && hover:bg-[#929292]"
                }   ` } onClick={btn_click1}>
          <div className="rounded-lg  w-[25px] h-[23px] bg-[#C4C4C4] m-1  "></div>
         <div className="flex flex-row w-full justify-center">
            See Care Employees
         </div>
        </button>
        <button className={` flex flex-row  w-[293px] h-[35px] font-semibold  justify-start items-center "  ${
                  button2
                    ? "bg-[#747474] && hover-bg-none  "
                    : "bg-[#E5E5E5] && hover:bg-[#929292]"
                }  ` } onClick={btn_click2}>
          <div className="rounded-lg  w-[25px] h-[23px] bg-[#C4C4C4] m-1  "></div>
         <div className="flex flex-row w-full justify-center">
            Add Department Information
         </div>
        </button>
        <button className={` flex flex-row  w-[293px] h-[35px] font-semibold justify-start items-center "  ${
                  button3
                    ? "bg-[#747474] && hover-bg-none  "
                    : "bg-[#E5E5E5] && hover:bg-[#929292]"
                }  ` } onClick={btn_click3}>
          <div className="rounded-lg  w-[25px] h-[23px] bg-[#C4C4C4] m-1  "></div>
         <div className="flex flex-row w-full justify-center">
            See Department Information
         </div>
        </button>
        <button className={` flex flex-row  w-[293px] h-[35px] font-semibold justify-start items-center "  ${
                  button4
                    ? "bg-[#747474] && hover-bg-none  "
                    : "bg-[#E5E5E5] && hover:bg-[#929292]"
                }   ` } onClick={btn_click4}>
          <div className="rounded-lg  w-[25px] h-[23px] bg-[#C4C4C4] m-1  "></div>
         <div className="flex flex-row w-full justify-center">
            Add Department Employees
         </div>
        </button>
        <button className={` flex flex-rowv w-[293px] h-[35px] font-semibold justify-start items-center "  ${
                  button5
                    ? "bg-[#747474] && hover-bg-none  "
                    : "bg-[#E5E5E5] && hover:bg-[#929292]"
                }   ` } onClick={btn_click5}>
          <div className="rounded-lg  w-[25px] h-[23px] bg-[#C4C4C4] m-1  "></div>
         <div className="flex flex-row w-full justify-center">
            See Department Employees
         </div>
        </button>
        <button className={` flex flex-row  w-[293px] h-[35px] font-semibold justify-start items-center "  ${
                  button6
                    ? "bg-[#747474] && hover-bg-none  "
                    : "bg-[#E5E5E5] && hover:bg-[#929292]"
                }   ` } onClick={btn_click6}>
          <div className="rounded-lg  w-[25px] h-[23px] bg-[#C4C4C4] m-1  "></div>
         <div className="flex flex-row w-full justify-center">
            Add Appraisal Session
         </div>
        </button>
        <button className={` flex flex-row  w-[293px] h-[35px] font-semibold justify-start items-center "  ${
                  button7
                    ? "bg-[#747474] && hover-bg-none  "
                    : "bg-[#E5E5E5] && hover:bg-[#929292]"
                }  ` } onClick={btn_click7}>
          <div className="rounded-lg  w-[25px] h-[23px] bg-[#C4C4C4] m-1  "></div>
         <div className="flex flex-row w-full justify-center">
            View Feedback
         </div>
        </button>
        <button className={` flex flex-row  w-[293px] h-[35px] font-semibold justify-start items-center "  ${
                  button8
                    ? "bg-[#747474] && hover-bg-none  "
                    : "bg-[#E5E5E5] && hover:bg-[#929292]"
                }   ` } onClick={btn_click8}>
          <div className="rounded-lg  w-[25px] h-[23px] bg-[#C4C4C4] m-1  "></div>
         <div className="flex flex-row w-full justify-center">
            Add Project Information
         </div>
        </button>
        <button className={` flex flex-row w-[293px] h-[35px] font-semibold justify-start items-center "  ${
                  button9
                    ? "bg-[#747474] && hover-bg-none  "
                    : "bg-[#E5E5E5] && hover:bg-[#929292]"
                }   ` } onClick={btn_click9}>
          <div className="rounded-lg  w-[25px] h-[23px] bg-[#C4C4C4] m-1  "></div>
         <div className="flex flex-row w-full justify-center">
            See Project Information
         </div>
        </button>
        <button className={` flex flex-row  w-[293px] h-[35px] font-semibold justify-start items-center "  ${
                  button10
                    ? "bg-[#747474] && hover-bg-none  "
                    : "bg-[#E5E5E5] && hover:bg-[#929292]"
                }   ` } onClick={btn_click10}>
          <div className="rounded-lg  w-[25px] h-[23px] bg-[#C4C4C4] m-1  "></div>
         <div className="flex flex-row w-full justify-center">
            Add Project Employees
         </div>
        </button>
        <button className={` flex flex-row  w-[293px] h-[35px] font-semibold justify-start items-center "  ${
                  button11
                    ? "bg-[#747474] && hover-bg-none  "
                    : "bg-[#E5E5E5] && hover:bg-[#929292]"
                } ` } onClick={btn_click11}>
          <div className="rounded-lg  w-[25px] h-[23px] bg-[#C4C4C4] m-1  "></div>
         <div className="flex flex-row w-full justify-center">
            See Project Employees
         </div>
        </button> 

        </div>
        
        
    
    </div>
    <Body/>
    </div>
    )
} 