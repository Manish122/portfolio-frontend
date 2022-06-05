import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";

function App() {




  return (
    <Router>
        <>
          <Header />
          {/* <Routes>
            <Route path="/" element={ <Home/>}
            />
            <Route path="/about" element={<About  />} />
            <Route path="/projects" element={<Projects  />}/>
            <Route path="/contact" element={<Contact />} /> */}
            {/* <Route
              path="/account"
              element={isAuthenticated ? <AdminPanel /> : <Login />}
            /> */}
            {/* <Route
              path="/admin/timeline"
              element={isAuthenticated ? <Timeline /> : <Login />}
            /> */}

            {/* <Route
              path="/admin/project"
              element={isAuthenticated ? <Project /> : <Login />}
            /> */}
          {/* </Routes> */}

          {/* <Footer /> */}
        </>
     
    </Router>
  );
}

export default App;
