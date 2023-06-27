// import React from "react";
// import { useState } from "react";
// import { Modal, Button, Divider } from "antd";
// import "antd/dist/antd.css";
// import { useEffect } from "react";

// export default function Dropdown() {
//   const [showOption, setShowOption] = useState(false);
//   const handleClick = () => {
//     setShowOption(!showOption);
//   };

//   const [click, setClick] = useState(false);
//   const change1 = () => {
//     setClick(!click);
//   };
//   const [click1, setClick1] = useState(false);
//   const change2 = () => {
//     setClick1(!click1);
//   };
//   const [click2, setClick2] = useState(false);
//   const change3 = () => {
//     setClick2(!click2);
//   };
//   const [submit, setSubmitted] = useState(false);
//   const action = () => {
//     setSubmitted(!submit);
//   };

//   const btn_click = () => {
//     change1();
//     change2();
//     change3();
//     action();
//     handleClick();
//   };

//   return (
//     <div>
//       <div className="flex flex-col h-screen w-screen bg-lime-800  justify-center">
//         <div className="flex flex-col bg-slate-700 h-4/6 w-screen justify-center">
//           <div className="flex flex-row bg-yellow-400  h-5/6 w-screen group   ">
//             <div
//               id="round_md"
//               className={`rounded-l-lg w-[44px] h-[44px]  flex flex-row items-center "   ${
//                 click ? "bg-[#4E4E4E] " : "bg-[#D9D9D9] "
//               } `}
//             >
//               <div
//                 id="inner_round"
//                 className={` absolute rounded w-[20px] h-[20px]  left-[13px]  flex flex-row  "   ${
//                   click ? "bg-[#FFFFFF] " : "bg-[#4E4E4E] "
//                 }`}
//               >
//                 <div
//                   id="inner_cross"
//                   className="absolute top-[1.57px] left-[2px] "
//                 >
//                   <svg
//                     className={` w-[16.5px] h-[16.84px]  "   ${
//                       click ? " text-[#4E4E4E] " : "text-[#FFFFFF] "
//                     }`}
//                     fill="currentColor"
//                     viewBox="0 0 17 18"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M16.5 2.42919L15.4287 1.35789L8 8.35789L1 0.929199L0 1.92919L7 9.35789L0 16.7866L1 17.7866L8 10.3579L15 17.7866L16 16.7866L9 9.35789L16.5 2.42919Z"
//                       clipRule="evenodd"
//                     ></path>
//                   </svg>
//                 </div>
//               </div>
//             </div>

//             <div
//               id="rounded_2"
//               className={` absolute h-[44px] w-[363px] left-[46px]  flex flex-row items-center border  border-solid"   ${
//                 click1 ? "rounded-tr-lg" : "rounded-r-lg "
//               } &&  ${click ? "bg-[#FFFFFF]" : "bg-[#D9D9D9] "} &&  ${
//                 click2 ? "border-[#929292]" : "border-none "
//               }  ${click ? "hover:bg-none" : "hover:bg-[#CCCCCC] "}`}
//             >
//               <div className="flex flex-row h-3/4 w-screen  justify-center items-center ">
//                 <div
//                   id="place"
//                   className=" absolute flex flex-row w-[337px] h-[1.067rem]  text-[14px] leading-[17.07px]  font-[400]   "
//                 >
//                   Place Holder
//                 </div>
//                 <button
//                   id="button1"
//                   className="absolute left-[343px] top-[19.39px]"
//                   onClick={btn_click}
//                 >
//                   {click === false ? (
//                     <img src=" Vector.svg" className="w-[9.39px] h-[5.84px] " />
//                   ) : (
//                     <img
//                       src=" Vector3.svg"
//                       className="w-[9.39px] h-[5.84px] "
//                     />
//                   )}
//                 </button>

//                 <div>
//                   {showOption && (
//                     <div
//                       class="absolute max-w-fit  my-6 left-[0.01rem] gap-[10px]  bg-[#FFFFFF] "
//                       role="menu"
//                       aria-orientation="vertical"
//                       aria-labelledby="menu-button"
//                       tabindex="-1"
//                     >
//                       <a
//                         href="#"
//                         class="w-[362.5px] h-[36px] p-[10px]  text-[#272727] block px-3 py-2 text-sm border border-solid border-[#929292]"
//                         role="menuitem"
//                         tabindex="-1"
//                         id="menu-item-0"
//                       >
//                         Account settings
//                       </a>
//                       <a
//                         href="#"
//                         class="text-gray-700 block px-4 py-2 text-sm"
//                         role="menuitem"
//                         tabindex="-1"
//                         id="menu-item-1"
//                       >
//                         Support
//                       </a>
//                       <a
//                         href="#"
//                         class="text-gray-700 block px-4 py-2 text-sm"
//                         role="menuitem"
//                         tabindex="-1"
//                         id="menu-item-2"
//                       >
//                         License
//                       </a>
//                       <form method="POST" action="#" role="none">
//                         <button
//                           type="submit"
//                           class="text-gray-700 block w-full px-4 py-2 text-left text-sm"
//                           role="menuitem"
//                           tabindex="-1"
//                           id="menu-item-3"
//                         >
//                           Sign out
//                         </button>
//                       </form>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
