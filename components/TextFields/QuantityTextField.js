import React from "react";
import ItemIcon from "../Sidebar/ItemIcon";

const QuantityTextField = ({label, onChange, type, placeholder, icon}) => {
    const [quantity, setQuantity] = React.useState(0);
    const [error, setError] = React.useState(false);
    return (
        <div className={"flex flex-col items-start gap-2 w-full h-full"}>
            <div className={"flex flex-row items-center p-0 gap-2"}>
                <label className={"text-black uppercase"}>{label}</label>
                {icon && <ItemIcon icon={icon} wid={`12px`} hei={`12px`}/>}

            </div>
            <div className={"flex flex-row w-full "}>
                <input
                    className={"w-full pr-1 h-12 pl-2.5 border-[1px] rounded-[6px]  m-0   border-primary"}
                    type={type}

                    min={0}

                    placeholder={placeholder}/>
                {/*<div className={"flex flex-col w-12  bg-primary rounded-r-[6px] justify-center items-center"}>*/}
                {/*    <div onClick={() => setQuantity(quantity + 1) || setError(false)}*/}
                {/*         className={"flex justify-center h-full items-center w-full border-b-2 border-white "}>*/}
                {/*        <Image className={"w-full h-full"} src={"/up.svg"} width={"12px"} height={"12px"}/>*/}
                {/*    </div>*/}
                {/*    <div onClick={() => quantity > 0 ? setQuantity(quantity - 1) : setError(true)}*/}
                {/*         className={"flex  h-full justify-center items-center w-full "}>*/}
                {/*        <Image className={"w-full h-full"} src={"/down.svg"} width={"12px"} height={"12px"}/>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>

            {error ? <div className={"text-red-500"}>{"This is error"}</div> : ""}

        </div>
    )
}
export default QuantityTextField;