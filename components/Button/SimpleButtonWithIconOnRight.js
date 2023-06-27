import React from "react";
import ItemIcon from "../Sidebar/ItemIcon";

const SimpleButtonWithIconOnRight = ({title, onClick, icon, width, height, bg}) => {
    return (
        <div onClick={onClick}
             className={`flex flex-row hover:cursor-pointer   justify-center w-${width} h-${height} bg-${bg}  py-3 text-white border-[1px] border-[#949494] rounded-[6px] gap-3 `}>
            <button
                className={" flex   "} onClick={(e) => {
                e.preventDefault()
            }}>{title}

            </button>
            {icon ? <ItemIcon icon={icon} hei={"10px"} wid={"10px"}/> : ""}
        </div>)
}
export default SimpleButtonWithIconOnRight;