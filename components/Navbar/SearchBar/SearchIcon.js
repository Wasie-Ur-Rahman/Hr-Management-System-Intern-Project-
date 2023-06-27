import React from "react";
import Image from "next/image";

const SearchIcon = ({icon, wid, hei}) => {
    return (
        <Image src={icon} width={wid} height={hei}/>
    );
};
export default SearchIcon;
