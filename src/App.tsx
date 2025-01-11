import "./App.css";
import AboutMe from "./Components/AboutMe";
import EduExp from "./Components/EduExp";
import Footer from "./Components/Footer";
import Landing from "./Components/Landing";
import MyProjects from "./Components/MyProjects";
import MySkills from "./Components/MySkills";
import NavBar from "./Components/NavBar";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="bg-[#1E1E1E] font-Poppins w-screen overflow-hidden 2xl:px-0 px-2">
      <NavBar />
      <Landing />
      <Skills />
      <AboutMe></AboutMe>
      <EduExp></EduExp>
      <MySkills />
      <MyProjects />
      <Footer />
    </div>
  );
}

export default App;
