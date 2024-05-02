import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home.js";
import ApplicationForm from "./Components/ApplicationForm.js";
import OwnerForm from "./Components/OwnerForm.js";
import BuildingProfile from "./Components/BuildingProfile.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/application-form" element={<ApplicationForm />} />
        <Route path="/owner-form" element={<OwnerForm />} />
        <Route path="/building-profile" element={<BuildingProfile />} />
      </Routes>
    </>
  );
}

export default App;
