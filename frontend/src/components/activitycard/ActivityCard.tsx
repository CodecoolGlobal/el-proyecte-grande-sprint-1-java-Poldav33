// @ts-ignore
const ActivityCard = ({ activity }) => {

    return (
        <div key={activity.id} className={"activity-card"}>
            <div className={"activity-difficulty"}>
                {activity.difficulty}
            </div>
            <div className={"activity-type"}>
                {activity.type}
            </div>
            <div className={"activity-muscle"}>
                {activity.muscle}
            </div>
            <div className={"activity-equipment"}>
                {activity.equipment}
            </div>
        </div>
    );
}

export default ActivityCard;