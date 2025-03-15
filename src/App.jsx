import './index.css';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Navbar from "../components/Home_Components/Navbar.jsx";
import ProfileCard from "../components/Home_Components/ProfileCard.jsx";
import ProjectCard from "../components/Home_Components/ProjectCard.jsx";
import Footer from "../components/Home_Components/Footer.jsx";
import About from "../components/pages/About.jsx";
import RDC from "../components/pages/All_Projects/RDC.jsx"
import MNRDC from "../components/pages/All_Projects/MNRDC.jsx"
import CarPooling from "../components/pages/All_Projects/CarPooling.jsx"

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Root />} />
          <Route path='/' element={pageLayOut()}>
              <Route path='/about' element={<About />} />
              <Route path='/rdc' element={<RDC />}/>
              <Route path='/mnrdc' element={<MNRDC />}/>
              <Route path='/car-pooling' element={<CarPooling />}/>
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

const pageLayOut = ()=>{
    return(
        <>
            <Navbar />
              <Outlet />
            <Footer />
        </>
    )
}
