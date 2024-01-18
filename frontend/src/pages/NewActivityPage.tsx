import ActivityForm from "../components/activityform/ActivityForm.tsx";
import {useState} from "react";

interface User {
    id : number,
    username : string,
    email : string
}

const NewActivityPage = () => {
    const [user, setUser] = useState<User>(null);
    return (
        <ActivityForm />
    );
}

export default NewActivityPage;
