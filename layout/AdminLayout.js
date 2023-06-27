import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
export const AdminLayout = ({ children }) => {
  return (
    <div className={"flex flex-col w-full h-screen overflow-hidden"}>
      <Navbar />
      <div className={"flex flex-row h-full overflow-auto "}>
        <Sidebar />
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
};
export const getLayout = (page) => <AdminLayout>{page}</AdminLayout>;
