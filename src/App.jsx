import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import Login from "./components/Login";
import Register from "./components/Register";
import DashBoard from "./components/DashBoard";
import SideBar from "./components/SideBar";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route element={<SideBar name="Nihal Upreti" />}>
            <Route path="/dashboard" element={<DashBoard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
