import ActivityCard from "../activitycard";

// @ts-ignore
const ActivityList = ({  activityList }) => {
    return (
        <div className={"activites-container"}>
            {activityList.map(
                (activity: any) => <ActivityCard activity={activity}/>
            )}
        </div>
    );
}

export default ActivityList;