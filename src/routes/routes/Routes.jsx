import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home";
import Instructors from "../../pages/Instructors/Instructors";
import Classes from "../../pages/Classes/Classes";
import Login from "../../pages/LoginAndRegister/Login/Login";
import Register from "../../pages/LoginAndRegister/Register/Register";
import Dashboard from "../../layout/Dashboard/Dashboard";
import FormCRUD from "../../layout/Dashboard/InstrctorDashboard/FormCRUD/FormCRUD";
import InstructorTable from "../../layout/Dashboard/InstrctorDashboard/InstructorTable/InstructorTable";
import ManageClassesTable from "../../layout/Dashboard/AdminDashboard/ManageClasses/ManageClassesTable";
import ManageUsersTable from "../../layout/Dashboard/AdminDashboard/ManageUsers/ManageUsersTable";
import StudentSelectedTable from "../../layout/Dashboard/StudentDashboard/StudentSelectedTable/StudentSelectedTable";
import StudentEnrolledTable from "../../layout/Dashboard/StudentDashboard/StudentEnrolledTable/StudentEnrolledTable";

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
        path: "/dashboard/student/selected-classes",
        element: <StudentSelectedTable></StudentSelectedTable>,
      },
      {
        path: "/dashboard/student/enrolled-classes",
        element: <StudentEnrolledTable></StudentEnrolledTable>,
      },
      {
        path: "/dashboard/instructor/my-classes",
        element: <InstructorTable></InstructorTable>,
      },
      {
        path: "/dashboard/instructor/my-classes",
        element: <InstructorTable></InstructorTable>,
      },
      {
        path: "/dashboard/instructor/add-class",
        element: <FormCRUD></FormCRUD>,
      },
      {
        path: "/dashboard/admin/manage-classes",
        element: <ManageClassesTable></ManageClassesTable>,
      },
      {
        path: "/dashboard/admin/manage-users",
        element: <ManageUsersTable></ManageUsersTable>,
      },
    ],
  },
]);

export default router;
