import React from "react";
import TopSection from "./TopSection";
import SideBarItem from "./SideBarItem";
import {useRouter} from "next/router";
import { supabase } from "../../database/Database";

const Sidebar = () => {

    const router = useRouter();
    return (
        <div
            className={
                "flex flex-col items-start gap-96 pt-14 w-1/4 h-full    border-[1px] border-black shadow border-t-0 shadow-blac overflow-auto"
            }
        >
            <div
                className={"flex flex-col gap-[22px] h-full w-full items-start p-0 "}
            >
                <TopSection name={"Admin"}/>

                <SideBarItem
                    title={"Add Employee"}
                    {...router.pathname === "/add_care_employees" ? {icon: '/Schedules.svg'} : {icon: '/Schedule1.svg'}}
                    {...router.pathname === "/add_care_employees" ? {isActive: true} : {isActive: false}}


                    onClick={() => {
                        router.push("/add_care_employees");
                    }}
                />
                <SideBarItem
                    title={"Care Employees"}
                    {...router.pathname === "/care_employee_profile" ? {icon: '/POSelected.svg'} : {icon: '/PO.svg'}}
                    {...router.pathname === "/care_employee_profile" ? {isActive: true} : {isActive: false}}
                    onClick={() => {
                        router.push('/care_employee_profile')
                    }}
                />
                <SideBarItem
                    title={"Department Inforamtion"}
                    {...router.pathname === "/care_department_info" ? {icon: '/Schedules.svg'} : {icon: '/Schedule1.svg'}}
                    onClick={() => {
                        router.push('/care_department_info')
                    }}
                    {...router.pathname === "/care_department_info" ? {isActive: true} : {isActive: false}}
                />

                        <SideBarItem
                            title={"Department List"}
                            {...router.pathname === "/seedepartment_info" ? {icon: '/POSelected.svg'} : {icon: '/PO.svg'}}
                            {...router.pathname === "/seedepartment_info" ? {isActive: true} : {isActive: false}}
                            onClick={() => {
                                router.push("/seedepartment_info")
                            }}
                        />
                        <SideBarItem
                            title={"Department Employees"}
                            {...router.pathname === "/care_department_employee" ?{icon: '/Schedules.svg'} : {icon: '/Schedule1.svg'}}
                            onClick={() => {
                                router.push('/care_department_employee')
                            }}
                            {...router.pathname === "/care_department_employee" ? {isActive: true} : {isActive: false}}
                        />
                        

                        <SideBarItem
                            title={"Department Employees List"}
                            {...router.pathname === "/seedepartment_employees" ? {icon: '/POSelected.svg'} : {icon: '/PO.svg'}}
                            onClick={() => {
                                router.push('/seedepartment_employees')
                            }}
                            {...router.pathname === "/seedepartment_employees" ? {isActive: true} : {isActive: false}}
                        />
                        
                        <SideBarItem
                            title={"Appraisal Session"}
                            {...router.pathname === "/care_appraisal_session" ? {icon: '/Schedules.svg'} : {icon: '/Schedule1.svg'}}
                            onClick={() => {
                                router.push('/care_appraisal_session')
                            }}
                            {...router.pathname === "/care_appraisal_session" ? {isActive: true} : {isActive: false}}
                        />
                        

                        <SideBarItem
                            title={"Feedback"}
                            {...router.pathname === "/answer" ? {icon: '/POSelected.svg'} : {icon: '/PO.svg'}}
                            onClick={() => {
                                router.push('/answer')
                            }}
                            {...router.pathname === "/answer" ? {isActive: true} : {isActive: false}}
                        />
                        
                        <SideBarItem
                            title={"Projects Information"}
                            {...router.pathname === "/care_project_information" ? {icon: '/Schedules.svg'} : {icon: '/Schedule1.svg'}}
                            onClick={() => {
                                router.push('/care_project_information')
                            }}
                            {...router.pathname === "/care_project_information" ? {isActive: true} : {isActive: false}}
                        />

                        <SideBarItem
                            title={"Projects List"}
                            {...router.pathname === "/seeproject_info" ? {icon: '/POSelected.svg'} : {icon: '/PO.svg'}}
                            onClick={() => {
                                router.push('/seeproject_info')
                            }}
                            {...router.pathname === "/seeproject_info" ? {isActive: true} : {isActive: false}}
                        />
                        
                        <SideBarItem
                            title={"Projects Employees"}
                            {...router.pathname === "/care_project_emp" ? {icon: '/Schedules.svg'} : {icon: '/Schedule1.svg'}}
                            onClick={() => {
                                router.push('/care_project_emp')
                            }}
                            {...router.pathname === "/care_project_emp" ? {isActive: true} : {isActive: false}}
                        />

                        <SideBarItem
                            title={"Projects Employees List"}
                            {...router.pathname === "/see_project_employee" ? {icon: '/POSelected.svg'} : {icon: '/PO.svg'}}
                            onClick={() => {
                                router.push('/see_project_employee')
                            }}
                            {...router.pathname === "/see_project_employee" ? {isActive: true} : {isActive: false}}
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
};

export default Sidebar;
