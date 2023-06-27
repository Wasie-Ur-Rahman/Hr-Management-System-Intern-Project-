import React, { useContext } from 'react'
import TopSection from "./TopSection";
import SideBarItem from "./SideBarItem";
import {useRouter} from "next/router";
import { supabase } from '../../database/Database';
function SidebarEmp() {
    const router = useRouter();
    return (
        <div
            className={
                "flex flex-col items-start gap-96 pt-14 w-1/4 h-full    border-[1px] border-black shadow border-t-0 shadow-black"
            }
        >
            <div
                className={"flex flex-col gap-[22px] h-full w-full items-start p-0 "}
            >
                <TopSection name={"Employee"}/>

                <SideBarItem
                    title={"Appraisal Lists"}
                    {...router.pathname === "/appraisalslistEmp" ? {icon: '/Schedules.svg'} : {icon: '/Schedule1.svg'}}
                    {...router.pathname === "/appraisalslistEmp" ? {isActive: true} : {isActive: false}}


                    onClick={() => {
                        router.push("/appraisalslistEmp");
                    }}
                />
                <SideBarItem
                    title={"Profile"}
                    {...router.pathname === "/Profile" ? {icon: '/POSelected.svg'} : {icon: '/PO.svg'}}
                    {...router.pathname === "/Profile" ? {isActive: true} : {isActive: false}}
                    onClick={() => {
                        router.push(`/Profile`);
                    }}
                />

                <div className={"flex flex-col mt-auto mb-4 w-full "}>
                    <SideBarItem
                        title={"Logout"}
                        icon={"/LogoutButton.svg"}
                        onClick={() => {
                            supabase.auth.signOut()
                            router.push('/login')
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default SidebarEmp