import React from "react";
import Navbar from "../components/Navbar/Navbar";
import SidebarEmp from "../components/Sidebar/SidebarEmp";

export const EmpLayout =({children})=>{
    return (
        <div className={"flex flex-col w-full h-screen overflow-hidden"}>
          <Navbar />
          <div className={"flex flex-row h-full overflow-auto "}>
            <SidebarEmp />
            <div
              className={
                "flex flex-col w-full h-full justify-center items-center bg-white overflow-auto"
              }
            >
              {children}
            </div>
          </div>
          {/*<Footer/>*/}
        </div>
      );
}

export const getLayout = (page) => <EmpLayout>{page}</EmpLayout>;