import UserRegisterForm from "./index.ts";
import {useNavigate} from "react-router-dom";
import User from "../../type/types.ts";



function sendUserDatas ( user : User) {
    fetch("http://localhost:8080/api/exc/register", {
        method : "POST",
        headers : {
            "Content-Type": "application/json",
        },
        body : JSON.stringify(user)
    }).then((res) => res.json());
}



function UserRegisterPage () {
    const navigate = useNavigate()

    function handleSendUserDatas (user: User) {
        sendUserDatas(user)
        navigate("/login")
    }


    return (
        <UserRegisterForm
        onSave={handleSendUserDatas}
        />
    )


}

export default UserRegisterPage;