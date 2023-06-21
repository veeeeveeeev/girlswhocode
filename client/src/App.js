import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "scenes/Home";
import { CssBaseline } from "@mui/material";
import Navbar from "scenes/Navbar";
import CreatePost from "scenes/CreatePost";
import Footer from "scenes/Footer";
import Articles from "scenes/Articles";
import About from "scenes/About";
import Contact from "scenes/Contact";
import Post from "scenes/Post";
import Category from "scenes/Category";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CssBaseline />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/articles/:category/:id" element={<Post />} />
          <Route path="/articles/:category" element={<Category />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
