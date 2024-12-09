import {
  BrowserRouter,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import DashBoard from "./components/DashBoard";
import CompletedTodos from "./components/CompletedTodos";
import SideBar from "./components/SideBar";
import TaskCard from "./components/TaskCard";
import TaskBoard from "./components/TaskBoard";

// function App() {
//   return (
//     <BrowserRouter>
//       <AuthHandler />
//       <Routes>
//         <Route path="/" element={<NavigateBasedOnAuth />} />
//         <Route path="/signin" element={<Login />} />
//         <Route path="/signup" element={<Register />} />
//         <Route element={<SideBar name="Nihal Upreti" />}>
//           <Route path="/dashboard" element={<DashBoard />} />
//           <Route path="/completed" element={<CompletedTodos />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// function AuthHandler() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     const token = localStorage.getItem("authToken");

//     if (
//       token &&
//       (location.pathname === "/signin" || location.pathname === "/signup")
//     ) {
//       navigate("/dashboard");
//     } else if (
//       !token &&
//       location.pathname !== "/signin" &&
//       location.pathname !== "/signup"
//     ) {
//       navigate("/signin");
//     }
//   }, [navigate, location]);

//   return null;
// }

// function NavigateBasedOnAuth() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("authToken");
//     navigate(token ? "/dashboard" : "/signin");
//   }, [navigate]);

//   return null;
// }

function App() {
  return (
    <>
      <TaskBoard boardName="Todos" totalTasks={4}>
        <TaskCard
          title="Brainstorming"
          priority="Low"
          Description="Brainstroming brings team member's diverse experience into play."
        />
      </TaskBoard>

      {/* <SideBar name="Nihal Upreti" />; */}
    </>
  );
}
export default App;
