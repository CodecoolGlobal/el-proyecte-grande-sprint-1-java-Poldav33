import LogInUser from "../../type/types.ts";
import UserLoginForm from "./index.ts";
import {useState} from "react";
import {useNavigate} from "react-router-dom";


function UserLoginPage() {
    const navigate = useNavigate();
    const [userIsValid, setUserIsValid] = useState(false)
    const [errorMassage, setErrorMassage] = useState(String)


    async function sendUserDatas(user: LogInUser): Promise<void> {
        const response = await fetch("/api/users/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user)
            })

        if (response.ok) {
            setUserIsValid(true);
        } else if (response.status === 400) {
            setErrorMassage(await response.text())
            console.log(errorMassage)
        }

        const data: boolean = await response.json();
        if (userIsValid) {
            navigate('/home');
        }

    }

    if (!userIsValid) {
        return (
            <UserLoginForm
                loginUser={sendUserDatas}/>);
    } else {
        navigate("/home");
    }
}


export default UserLoginPage;

