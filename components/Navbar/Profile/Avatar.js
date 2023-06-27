import React from "react";
import Image from "next/image";

const Avatar = ({user, width, height}) => {
    return (
        <div className="w-8 h-8  rounded-[9px]">
            <Image
                className={"rounded-2xl"}
                width={width}
                height={height}
                src={user}
            />
        </div>
    );
};
export default Avatar;
