import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home";
import Instructors from "../../pages/Instructors/Instructors";
import Classes from "../../pages/Classes/Classes";
import Login from "../../pages/LoginAndRegister/Login/Login";
import Register from "../../pages/LoginAndRegister/Register/Register";
import Dashboard from "../../layout/Dashboard/Dashboard";
import FormCRUD from "../../layout/Dashboard/FormCRUD/FormCRUD";
import StudentTable from "../../layout/Dashboard/StudentDashboard/StudentTable";
import InstructorTable from "../../layout/Dashboard/InstrctorDashboard/InstructorTable";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "instructors",
        element: <Instructors />,
      },
      {
        path: "classes",
        element: <Classes />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <FormCRUD></FormCRUD>,
      },
      {
        path: "/dashboard/my-classes",
        element: <InstructorTable></InstructorTable>,
      },
    ],
  },
]);

export default router;
