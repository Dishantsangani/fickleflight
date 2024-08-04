import "./App.css";
import Hotels from "./Pages/Hotels";
import Homepage from "./Pages/Homepage";
import Search from "./Pages/Search";
import Page404 from "./Pages/Page404";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Offers from "./Pages/Offers";
import Loginpage from "./Pages/Loginpage";
import Registor from "./Pages/Registor";
import Protected from "./Pages/Protected";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Protected Component={Homepage} />} />
        <Route path="/hotels" element={<Protected Component={Hotels} />} />
        <Route path="/search" element={<Protected Component={Search} />} />
        <Route path="/offers" element={<Protected Component={Offers} />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/registor" element={<Registor />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
