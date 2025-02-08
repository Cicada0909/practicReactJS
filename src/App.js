import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home/home"
import About from "./pages/about/about"
import Nav from "./components/Nav/Nav";
import User from "./pages/User/User"


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:id" element={<User />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
