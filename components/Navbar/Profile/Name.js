import React from "react";

const Name = ({name}) => {
    return (
        <div className={"w-32 m-auto "}>
            <h1
                className={
                    "text-[12px]   font-normal leading-[15px] text-black tracking-wide  "
                }
            >
                {name}
            </h1>
        </div>
    );
};
export default Name;
