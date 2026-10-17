import { Route, Routes } from "react-router";
import { useState } from "react";
import NavBar from "./components/NavBar";
import ServiceList from "./components/ServiceList";
import BusinessList from "./components/BusinessList";
import LoginPage from "./components/LoginPage";
import LoginForm from "./components/LoginForm";
import RegistrationPage from "./components/RegistrationPage";
import HomePage from "./components/HomePage";

export interface User {
  name: string;
  type: "Customer" | "Business";
}

function App() {
  const serviceTypes = ["Hair", "Spa", "Massage", "Beauty"];
  const [user, setUser] = useState<User | null>(null);

  return (
    <>
      <NavBar user={user} logout={setUser} />
      <main className="flex-auto flex justify-center items-center">
        <Routes>
          <Route path="/" element={<HomePage serviceTypes={serviceTypes} />} />
          <Route path="/login" element={<LoginPage loginUser={setUser} />} />
          <Route path="/loginform" element={<LoginForm />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/hair" element={<BusinessList />} />
          <Route path="/hair/business" element={<ServiceList />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
