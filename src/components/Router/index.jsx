import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Logement from "../../pages/Logement";
import Apropos from "../../pages/Apropos";
import Error404 from "../../pages/Error404";
import Layout from "../Layout";
function AppRouter() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Logement/:id" element={<Logement />} />
          <Route path="/Apropos" element={<Apropos />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default AppRouter;
