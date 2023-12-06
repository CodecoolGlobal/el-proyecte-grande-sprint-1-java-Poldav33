import {useState} from "react";


function RegisterUser ({onSave}) {
    const [userName,setUserName] = useState("");
    const [password1,setPassword1] = useState("");
    const [password2,setPassword2] = useState("");
    const [email,setEmail] = useState("");



    function handleSubmit () {
        if (userNameIsValid() && passwordIsvalid()) {
            return onSave({
                username: userName,
                password: password1,
                email: email
            })
        }
    }

    function userNameIsValid () : boolean {
        return userName.length > 4
    }

    function passwordIsvalid () : boolean {
        return (password1 === password2) && password1.length > 4
    }

    return(
    <form onSubmit={() => handleSubmit()}>
        <label htmlFor={"user-name"}>Username:
            <input onChange={(e) => setUserName(e.target.value)}  type={"text"} />
        </label>
        <label htmlFor={"password"}>Password:
            <input onChange={(e) => setPassword1(e.target.value)} type={"password"} />
        </label>
        <label htmlFor={"password"}>Re-enter password:
            <input onChange={(e) => setPassword2(e.target.value)} type={"password"} />
        </label>
        <label htmlFor={"email"}>Email:
            <input onChange={(e) => setEmail(e.target.value)} type={"email"} />
        </label>
    </form>
    )

}

export default RegisterUser;