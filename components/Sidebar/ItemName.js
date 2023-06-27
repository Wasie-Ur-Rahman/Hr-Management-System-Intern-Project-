import React from "react";

const ItemName = ({name, isActive}) => {
    return (
        <div className={""}>
            <p className={`  text-[12px] font-[500] text-[#313132] ${isActive ? "font-[600]" : " font-[500]"}`}>
                {name}
            </p>
        </div>
    );
};
export default ItemName;
