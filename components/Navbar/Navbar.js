import React from "react";
import Logo from "./Logo/Logo";
import SearchBar from "./SearchBar/SearchBar";
import Datee from "./Date/Date";
import Profile from "./Profile/Profile";
import Head from "next/head";

const Navbar = () => {
    return (
        <div
            className={
                "flex flex-col content-center items-center py-1 px-14 gap-2.5 border-b-[1px] border-black"
            }
        >
            <div
                className={
                    "flex flex-row justify-between  content-center items-center  w-full "
                }
            >
                <Head>
                    <title>Wiser Machines</title>
                </Head>

                <Logo/>
                <SearchBar width={"[760px]"} icon={"/Search.svg"} height={"[56px]"} background={"primary"}
                           borderRadius={"[12px]"} searchHei={"20px"} searchWid={"20px"}/>
                <Datee/>
                {/* <Profile/> */}
            </div>
        </div>
    );
};
export default Navbar;
