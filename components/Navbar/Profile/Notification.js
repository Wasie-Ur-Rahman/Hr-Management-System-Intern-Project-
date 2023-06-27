import React from "react";
import Image from "next/image";

const Notification = ({notification}) => {
    return (
        <div className={"w-5 h-5 m-auto  "}>
            <Image src={"/images/notification.png"} width={"25px"} height={"25px"}/>
        </div>
    );
};
export default Notification;
