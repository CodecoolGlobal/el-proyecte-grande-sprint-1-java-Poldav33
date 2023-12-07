import React, {useState} from "react";
import User from "../../type/types.ts";




interface onSaveProp {
    onSave : (user : User) => void
}


function RegisterUser ({onSave} : onSaveProp) {
    const [password2,setPassword2] = useState("");
    const [user,setUser] = useState({
        username :"",
        name : "",
        password : "",
        email : ""
    })


    function handleChange (e: React.ChangeEvent<HTMLInputElement>) {

        if (e != null && e.target != null) {
        const {name, value} = e.target;
        setUser({...user, [name] : value})
        }

    }


    function handleSubmit () {
        if (userNameIsValid() && passwordIsValid()) {
            return onSave(user)
        }
    }

    function userNameIsValid () : boolean {
        return user.name.length > 4
    }

    function passwordIsValid () : boolean {
        return (user.password === password2) && user.password.length > 4
    }

    return(
    <form onSubmit={() => handleSubmit()}>
        <label htmlFor={"Username"}>Username:
            <input name={"username"} value={user.username} onChange={handleChange}  type={"text"} />
        </label>
        <label htmlFor={"name"}>name:
            <input name={"name"} value={user.name} onChange={handleChange}  type={"text"} />
        </label>
        <label htmlFor={"Password"}>Password:
            <input name={"password"} value={user.password} onChange={handleChange} type={"password"} />
        </label>
        <label htmlFor={"Re-enter password"}>Re-enter password:
            <input onChange={(e) => setPassword2(e.target.value)} type={"password"} />
        </label>
        <label htmlFor={"email"}>Email:
            <input name={"email"} value={user.email} onChange={handleChange} type={"email"} />
        </label>
    </form>
    )

}

export default RegisterUser;