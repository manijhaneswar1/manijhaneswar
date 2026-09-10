import './index.css';
import { HashRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Navbar from "../components/Home_Components/Navbar.jsx";
import ProfileCard from "../components/Home_Components/ProfileCard.jsx";
import ProjectCard from "../components/Home_Components/ProjectCard.jsx";
import Footer from "../components/Home_Components/Footer.jsx";
import About from "../components/pages/About.jsx";
import RDC from "../components/pages/All_Projects/RDC.jsx";
import MNRDC from "../components/pages/All_Projects/MNRDC.jsx";
import CarPooling from "../components/pages/All_Projects/CarPooling.jsx";
import Dden from "../components/pages/All_Projects/Dden.jsx";
import PLAAM from "../components/pages/All_Projects/PLAAM.jsx";
import SIRIBangles from "../components/pages/All_Projects/SIRIBangles.jsx";
import LAVVI from "../components/pages/All_Projects/LAVVI.jsx";
import Workmitra from "../components/pages/All_Projects/Workmitra.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route element={<PageLayout />}>
          <Route path="/about" element={<About />} />
          <Route path="/rdc" element={<RDC />} />
          <Route path="/mnrdc" element={<MNRDC />} />
          <Route path="/car-pooling" element={<CarPooling />} />
          <Route path="/dden" element={<Dden />} />
          <Route path="/plaam" element={<PLAAM />} />
          <Route path="/siri-bangles" element={<SIRIBangles />} />
          <Route path="/lavvi" element={<LAVVI />} />
          <Route path="/workmitra" element={<Workmitra />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

const Root = () => {
  return (
    <>
      <Navbar />
      <ProfileCard />
      <ProjectCard />
      <Footer />
    </>
  );
};

const PageLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
