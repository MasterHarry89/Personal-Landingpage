import LandingPage from "./LandingPage";
import SecondPage from "./SecondPage";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/SecondPage" element={<SecondPage />} />
    </Routes>
  );
}

export default App;
