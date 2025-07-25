import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import StudentDetail from "./component/DetailComponent";
import NavbarComponent from "./component/NavbarComponent";
import ListComponent from "./component/ListComponent";
import AddComponent from "./component/AddComponent";
import UpdateComponent from "./component/UpdateComponent";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/list" element={<ListComponent />} />
          <Route path="/detail/:id" element={<StudentDetail />} />
          <Route path="/update/:id" element={<UpdateComponent />} />
          <Route path="/add" element={<AddComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
