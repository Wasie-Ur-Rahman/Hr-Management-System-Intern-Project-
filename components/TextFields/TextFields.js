import React from 'react';


const TextFieldWithLabel = ({label, value, onChange, type, placeholder, error, icon, color, bgColor, border}) => {
    return (
        <div className={"flex flex-col items-start gap-2 w-full h-full"}>
            <div className={"flex flex-row items-center p-0 gap-2"}>
                <label className={`text-${color} uppercase`}>{label}</label>
                {/* {icon && <ItemIcon icon={icon} wid={`12px`} hei={`12px`}/>} */}

            </div>
            <input
                className={`w-full h-11 pl-2.5 border-[1px] rounded-[6px] bg-[${bgColor}] text-${color} placeholder-${color}   border-[#2F2F2F]`}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}/>
            {error && <div className={"text-red-500"}>{error}</div>}
        </div>
    )
}
export default TextFieldWithLabel;