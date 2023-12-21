import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hotels from "./components/Hotels";
import HotelDetail from "./components/HotelDetail";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/hotels/:slug" element={<HotelDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
