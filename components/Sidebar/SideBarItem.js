import React from "react";
import ItemIcon from "./ItemIcon";
import ItemName from "./ItemName";

const SideBarItem = ({title, icon, onClick, isActive}) => {
    return (

        <div
            className={`w-full bg-white hover:transition-all cursor-pointer duration-500 h-14 hover:bg-primary   ${
                isActive
                    ? "border-r-2 bg-[#E5E5E5] border-r-border active:bg-[#e5e5e5]"
                    : ""
            }`}
        >
            <div
                onClick={onClick}
                className={
                    "flex flex-row  items-center w-9/12 m-auto gap-x-[22px] hover:transition-all duration-500 h-14  "
                }
            >
                <ItemIcon icon={icon} wid={"30px"} hei={"30px"}/>
                <ItemName name={title} isActive={isActive}/>
            </div>
        </div>
    );
};
export default SideBarItem;

