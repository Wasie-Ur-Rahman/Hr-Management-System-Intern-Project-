import React from "react";

const TopSection = ({name}) => {
    return (
        <div className={" ml-[44px] flex-none order-none flex-grow-0  "}>
            <p className={"text-[14px] font-[700]   leading-[12px]"}>
                {name}
            </p>
        </div>
    );
};

export default TopSection;
