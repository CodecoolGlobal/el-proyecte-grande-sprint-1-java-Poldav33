import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import UserRegisterPage from "./components/user-register-form/UserRegisterPage.tsx";
import UserLoginPage from "./components/userloginform/UserLoginPage.tsx";
import Nutrition from "./pages/Nutrition.tsx";
import ExercisePage from "./pages/ExercisePage.tsx";
import NewActivityPage from "./pages/NewActivityPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/home",
                element: <HomePage />,
            },
            {
                path: "/registration",
                element: <UserRegisterPage />,
            },
            {
                path : "/login",
                element : <UserLoginPage />
            },
            {
                path:"/nutrition",
                element : <Nutrition/>
            },
            {
                path:"/exercise",
                element: <ExercisePage/>
            },
            {
                path: "/newactivity",
                element: <NewActivityPage/>
            }
        ],
    },
]);


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);