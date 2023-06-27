import React from "react";

const Datee = () => {
    const d = new Date();
    // console.log(d)

    console.log(d.toDateString());

    return (
        <div className={"flex  items-end "}>
            {" "}
            {/* Date */}
            <p
                className={
                    "  font-[500] leading-[15px] text-[12px] m-auto"
                }
            >
                {d.toDateString() + " "}
            </p>
        </div>
    );
};
export default Datee;
