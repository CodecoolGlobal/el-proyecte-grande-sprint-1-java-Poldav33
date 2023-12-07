import {useEffect, useState} from "react";
import ActivityList from "../components/activitylist";
import NavigationBar from "../components/navigationbar";

const ExercisesPage = () => {
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

    return (
        <div className={"home-page"}>
            <NavigationBar/>
            {loading && !activities ?
                "loading"
                :
                <div className={"exercises-container"}>
                    test
                    <ActivityList activityList={activities}/>
                </div>
            }
        </div>
    );
}
export default ExercisesPage;