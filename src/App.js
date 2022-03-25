import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import World from "./pages/World"
import News from "./pages/News"
import './assets/boxicons-2.1.1/boxicons-2.1.1/css/boxicons.min.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App font-poppins bg-gray-50 overflow-hidden min-h-screen">
      <BrowserRouter>
      <Header/>
        <div className="px-3 md:px-8 flex flex-col items-center justify-start">
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/world" element={<World />}></Route>
            <Route path="/news" element={<News />}></Route>
          </Routes>
        </div>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
