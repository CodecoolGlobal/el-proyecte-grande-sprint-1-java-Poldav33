import UserRegisterForm from "./index.ts";
import {useNavigate} from "react-router-dom";
import User from "../../type/types.ts";



function sendUserDatas ( user : User) {
    fetch("/api/users/register", {
        method : "POST",
        headers : {
            "Content-Type": "application/json",
        },
        body : JSON.stringify(user)
    }).then((res) => res.json());
}



function UserRegisterPage () {
    const navigate = useNavigate()

    function handleSendUserData (user: User) {
        sendUserDatas(user)
        console.log(user);
        navigate("/login")
    }


    return (
        <UserRegisterForm
        onSave={handleSendUserData}
        />
    )


}

export default UserRegisterPage;