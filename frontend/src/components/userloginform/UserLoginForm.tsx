import LogInUser from "../../type/types.ts";
import React, {useState} from "react";

interface loginUserProp{
    loginUser :(user: LogInUser) => void
}
const UserLogin = ({loginUser} : loginUserProp) => {
    const [user,setUser ] = useState({
        name : "",
        password : "",
    } );
    const handleSubmit = (event: { preventDefault: () => void; }) => {
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
            <label htmlFor={"password"}>Password: </label>
            <input type={"password"} name={"password"} onChange={handleChange} value={user.password}/>
            <input type="submit" value="Submit" />
        </form>
    );
}
export default UserLogin;
