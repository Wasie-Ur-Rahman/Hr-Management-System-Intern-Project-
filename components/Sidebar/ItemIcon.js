import React from "react";
import Image from "next/image";

const ItemIcon = ({icon, wid, hei}) => {
    return (
        <div className={"flex items-center"}>
            <Image src={icon} width={wid} height={hei}/>
        </div>
    );
};
export default ItemIcon;
