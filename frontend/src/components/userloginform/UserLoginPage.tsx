import User from "../../type/types.ts";
import Userloginform from "./index.ts";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function UserLoginPage(){
    const navigate = useNavigate();
    const [userIsValid, setuserIsValid]= useState(false)
    async function  sendUserDatas(user :User): Promise<void> {
        const response =  await fetch("/api/users/login",
            {method : "POST",
                headers : {
                    "Content-Type": "application/json",
                },
                body : JSON.stringify(user)})
        const data :boolean = await response.json();
        setuserIsValid(data);

    }

    if(!userIsValid){
        return(
                <Userloginform
                    loginUser={sendUserDatas}/>);
    }

    navigate("/home");
}
export default UserLoginPage;