import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Nav from "./components/Nav/Nav";
import User from "./pages/User/User";
import Albums from "./pages/Albums/Albums";
import Album from "./pages/Album/Album";
import Form from "./pages/Form/Form";
import UncotrolledForm from "./pages/UncontrolledForm/UncotrolledForm";


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
          <Route path="/user/:id" element={<User />} />
        <Route path="/albums" element={<Albums />} />
          <Route path="/albums/:id" element={<Album />} />
        <Route path="/form" element={<Form />} />
        <Route path="/uncotrolled" element={<UncotrolledForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
