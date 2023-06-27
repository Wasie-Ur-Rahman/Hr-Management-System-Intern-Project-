import React from "react";
import Avatar from "./Avatar";
import Name from "./Name";
import Notification from "./Notification";

const Profile = () => {
    return (
        <div className={"flex flex-row gap-10 "}>
            <div className={"flex flex-row gap-3"}>
                <Avatar
                    width={"48px"}
                    height={"48px"}
                    user={"https://i.pravatar.cc/300"}
                />
                <Name name={"John Adam Shelby"}/>
            </div>
            <Notification/>
        </div>
    );
};
export default Profile;
