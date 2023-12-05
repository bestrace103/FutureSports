import { useState } from "react";
import {Routes, Route} from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Competitions from "./component/Competitions";
import ResultsStats from "./component/ResultsStats";
import GeneralInfo from "./component/GeneralInfo";
import Calendar from "./component/Calendar";
import Play from "./component/Play";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

function App() {
  const [name, setName] = useState("");

  return (
    <>
    <Navbar setName={setName} />

    <Routes >
      <Route path="/" element={ <Home name={name} /> } />
      <Route path="/competitions" element={ <Competitions /> } />
      <Route path="/resultsstats" element={ <ResultsStats /> } />
      <Route path="/generalinfo" element={ <GeneralInfo /> } />
      <Route path="/calendar" element={ <Calendar /> } />
      <Route path="/play" element={ <Play /> } />
      <Route path="/contact" element={ <Contact /> } />
    </Routes>

    <Footer />
    </>
  );
}

export default App;
