import { Route, Routes } from "react-router";
import { useEffect, useState } from "react";

import businessService from "./services/businessService";
import type { User } from "./types";

import NavBar from "./components/NavBar";
import ServiceList from "./pages/BusinessListPage/ServiceList";
import BusinessList from "./pages/BusinessListPage";
import LoginPage from "./pages/LoginPage";
import LoginForm from "./pages/LoginPage/LoginForm";
import RegistrationPage from "./pages/RegistrationPage";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/NotFoundPage";

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
      <NavBar user={user} logout={setUser} serviceTypes={serviceTypes} />
      <main className="flex-auto">
        <Routes>
          <Route path="/" element={<HomePage serviceTypes={serviceTypes} />} />
          <Route path="/login" element={<LoginPage loginUser={setUser} />} />
          <Route path="/loginform" element={<LoginForm />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/business/:businesstype" element={<BusinessList />} />
          <Route
            path="/business/:businesstype/:business"
            element={<ServiceList />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
