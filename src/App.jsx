import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/section/footer/footer";
import Form from "./components/section/form/form";
import Navbar from "./components/section/navbar/navbar";
import Section from "./components/section/section1/section";
import Section2 from "./components/section/section2/section2";
import Slider from "./components/section/slider/slider";
import Map from "./components/section/map/map";
import TemporaryDrawer from "./components/section/test/testbar";

function App() {
  return (
    <div className="main">
      <Navbar />
      <Section />
      <Section2 />
      <Slider />
      <Form />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
