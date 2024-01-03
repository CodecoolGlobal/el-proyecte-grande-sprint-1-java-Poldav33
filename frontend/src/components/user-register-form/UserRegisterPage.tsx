
import {useState} from 'react';
import {useNavigate} from "react-router-dom";
import UserRegisterForm from "./index.ts";
import {RegistrationUser} from "../../type/types.ts";


function UserRegisterPage() {
    const navigate = useNavigate()
    const [userRegistered, setUserRegistered] = useState(false);
    const [errorMassage, setErrorMassage] = useState(String);

    async function sendUserDatas(user: RegistrationUser) {
        const response = await fetch("/api/users/register", {

            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)

        }).then((res) => res.json());

        if (response.ok) {
            setUserRegistered(true)
        } else if (response.status === 400) {
            setErrorMassage(await response.text())
        }
        console.log(errorMassage)
    }

    if (!userRegistered) {
        return (
            <UserRegisterForm
                onSave={sendUserDatas}
            />
        )
    } else {
        navigate("/login")
    }

}


export default UserRegisterPage;

