import { useNavigate } from "react-router-dom";

const NavigationBar = () => {
    const navigate = useNavigate();
    return (
        <div className={"navbar"}>
            <button>
                Home
            </button>
            <button onClick={() => navigate("/exercises")}>
                Exercises
            </button>
            <button>
                Recipes
            </button>
            <button>
                Planner
            </button>
        </div>
    );
}

export default NavigationBar;