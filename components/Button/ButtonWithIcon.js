import React from "react";
import ItemIcon from "../Sidebar/ItemIcon";

const ButtonWithIcon = ({icon, onClick, title, width, height}) => {
    return (
        <div
            onClick={onClick}
            className={
                "hover:cursor-pointer h-11 rounded-2xl flex flex-row justify-center items-center"
            }
        >
            <div className={"icon  "}>
                <ItemIcon icon={icon} hei={"10px"} wid={"10px"}/>
            </div>
            <button className={`btn  w-${width} h-${height} `}>{title}</button>
        </div>
    );
};
export default ButtonWithIcon;
