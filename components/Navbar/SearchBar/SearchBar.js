import React from "react";
import SearchIcon from "./SearchIcon";

const SearchBar = ({onSearch, width, height, borderRadius, searchWid, searchHei, icon}) => {
    return (
        <div
            className={
                `flex flex-row  bg-[#B5B0B0]  w-1/3  h-${height}  rounded-lg items-center `
            }
        >
            <div className={`justify-center flex  h-12 w-full px-3  `}>
                {" "}
                {/* Search Bar */}
                <input
                    placeholder={"Search For xyz etc..."}
                    type={"search"}
                    className={"placeholder-white rounded-lg bg-[#B5B0B0]  w-full text-black h-full"}
                />
                <SearchIcon icon={icon} wid={searchWid} hei={searchHei}/>
            </div>
        </div>
    );
};

export default SearchBar;
