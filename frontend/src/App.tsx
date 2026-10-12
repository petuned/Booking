import { Route, Routes } from "react-router";
import NavBar from "./components/NavBar";
import ServiceTypes from "./components/ServiceTypes";
import ServiceList from "./components/ServiceList";
import BusinessList from "./components/BusinessList";

function App() {
  const serviceTypes = ["Hair", "Spa", "Massage", "Beauty"];

  return (
    <>
      <NavBar />
      <main className="flex-auto flex justify-center items-center">
        <Routes>
          <Route path="/" element={<ServiceTypes serviceTypes={serviceTypes} />} />
          <Route path="/hair" element={<BusinessList />} />
          <Route path="/hair/business" element={<ServiceList />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
