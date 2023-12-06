import UserLoginRegister from "../components/userloginform";

const NewUserPage = () => {
    const saveUser = (event) => {
    }

    return (
        <div className={"new-user-page"}>
            <UserLoginRegister registerUser={saveUser}/>
        </div>
    );
}