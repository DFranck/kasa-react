import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Logement from "../pages/Logement";
import Apropos from "../pages/Apropos";
import Error404 from "../pages/Error404";
import Header from "../components/Header";
import Footer from "../components/Footer";
function AppRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Logement/:id" element={<Logement />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRouter;
