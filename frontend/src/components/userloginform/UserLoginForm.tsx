import {Form} from "react-router-dom";

const UserLoginRegister = ({ registerUser }) => {
    const handleSubmit = (event) => {
        registerUser(event);
    }
    return (
        <Form onSubmit={handleSubmit}>
            <label htmlFor={"user-name"}>Username: </label>
            <input type={"text"} name={"user-name"}/>
            <label htmlFor={"email"}>Email: </label>
            <input type={"text"} name={"email"}/>
            <label htmlFor={"password"}>Password: </label>
            <input type={"text"} name={"password"}/>
        </Form>
    );
}

export default UserLoginRegister;
