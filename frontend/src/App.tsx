import { Route, Routes } from "react-router";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import ServiceList from "./components/ServiceList";
import BusinessList from "./components/BusinessList";
import LoginPage from "./components/login/LoginPage";
import LoginForm from "./components/login/LoginForm";
import RegistrationPage from "./components/registration/RegistrationPage";
import HomePage from "./components/HomePage";
import businessService from "./services/businessService";

export interface User {
  name: string;
  type: "Customer" | "Business";
}

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [serviceTypes, setServiceTypes] = useState([]);

  useEffect(() => {
    businessService
      .getServiceTypes()
      .then((res) => {
        setServiceTypes(res);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <NavBar user={user} logout={setUser} />
      <main className="flex-auto flex justify-center items-center">
        <Routes>
          <Route path="/" element={<HomePage serviceTypes={serviceTypes} />} />
          <Route path="/login" element={<LoginPage loginUser={setUser} />} />
          <Route path="/loginform" element={<LoginForm />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/:businesstype" element={<BusinessList />} />
          <Route path="/:businesstype/:business" element={<ServiceList />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
