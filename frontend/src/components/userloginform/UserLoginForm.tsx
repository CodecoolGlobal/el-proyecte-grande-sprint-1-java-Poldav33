//import User from "../../type/types.ts";
import React, {useState} from "react";

interface loginUserProp{
    loginUser :(user: { password: string; name: string; email: string }) => void
}
const UserLogin = ({loginUser} : loginUserProp) => {
    const [user,setUser ] = useState({
        name : "",
        password : "",
        email : ""
    } );
    const handleSubmit = (event) => {
        event.preventDefault();
        loginUser(user);
    }
    function handleChange(e :React.ChangeEvent<HTMLInputElement>){
        if(e != null  && e.target != null){
            const {name ,value} = e.target;
            setUser({...user,[name]:value});
        }

    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor={"user-name"}>Username: </label>
            <input type={"text"} name={"name"} onChange={handleChange} value={user.name}/>
            <label htmlFor={"email"}>Email: </label>
            <input type={"text"} name={"email"} onChange={handleChange} value={user.email}/>
            <label htmlFor={"password"}>Password: </label>
            <input type={"password"} name={"password"} onChange={handleChange} value={user.password}/>
            <input type="submit" value="Submit" />
        </form>
    );
}
export default UserLogin;
