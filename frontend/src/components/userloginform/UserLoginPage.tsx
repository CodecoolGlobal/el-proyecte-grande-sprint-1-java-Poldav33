import {LogInUser} from "../../type/types.ts";
import SignInSide from "./UserLoginForm.tsx";
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
        const authorizationHeader = response.headers.get('Authorization');
        console.log(authorizationHeader)

        if (response.ok) {
            localStorage.setItem("jwt-token", authorizationHeader)
            console.log(localStorage.getItem("jwt-token"))
            setUserIsValid(true);
        } else if (response.status === 400) {
            setErrorMassage(await response.text())
            console.log(errorMassage)
        }

        if (userIsValid) {
            navigate('/home');
        }

    }

    if (!userIsValid) {
        return (
            <SignInSide
                 onSave={sendUserDatas}/>);
    } else {
        navigate("/home");
    }
}


export default UserLoginPage;

