import {useEffect, useState} from "react";
import ActivityList from "../components/exerciselist";
import NavigationBar from "../components/navigationbar";

const HomePage = () => {
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect( () => {
        const getActivities = async () => {
            setLoading(true);
            const activityPromise = await fetch("https://api.api-ninjas.com/v1/exercises", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "X-Api-Key" : "xHjiZTRKqj3fhFPOOkekWQ==APN9dMnmhUWEV8Fn"
                },
            });
            const activities = await activityPromise.json();
            setActivities(activities);
            console.log(activities[0].name);
            setLoading(false);
        }
        getActivities();
    }, [])

    console.log("Lefut a homepage");

    // @ts-ignore
    return (
        <div className={"home-page"}>
            {loading && !activities ?
                "loading"
                :
                <div className={"exercises-container"}>
                    <ActivityList activityList={activities}/>
                </div>
            }
        </div>
    );
}
export default HomePage;