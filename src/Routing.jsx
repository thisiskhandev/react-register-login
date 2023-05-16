import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";
import Register from "./pages/Register";
import Login from "./pages/Login";
const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route errorElement={<Error404 />} />
      </Routes>
    </>
  );
};

export default Routing;
