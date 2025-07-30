import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ListComponent from "./component/ListComponent";
import NavbarComponent from "./component/NavbarComponent";
import AddComponent from "./component/AddComponent";
import HomeComponent from "./component/HomeComponent";
import UpdateComponent from "./component/UpdateComponent";
import DetailComponent from "./component/DetailComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/home" element={<HomeComponent />}></Route>
          <Route path="/list" element={<ListComponent />}></Route>
          <Route path="/add" element={<AddComponent />}></Route>
          <Route path="/update/:id" element={<UpdateComponent />} />
          <Route path="/detail/:id" element={<DetailComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
