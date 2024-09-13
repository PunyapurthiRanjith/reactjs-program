import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "../screens/home-screen";
import AboutScreen from "../screens/about-screen";
import NavigationBar from "../components/navbar/navbar";
import InvalidScreen from "../screens/invalid-screen";

const NavigationStack = () => {
  return (
    <>
    <NavigationBar/>
      {true ? (
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/*" element={<InvalidScreen />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/login" element={<AboutScreen />} />
        </Routes>
      )}
    </>
  );
};
export default NavigationStack;
