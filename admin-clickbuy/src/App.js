import ListSp from "./admin/ListSP";
import AdminPhone from "./admin/AdminPhone";
import "./App.css";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
     
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/admin" element={<AdminPhone/>}></Route>
          <Route path="/listsp" element={<ListSp/>}></Route>
        </Routes>
      </div>
    
  );
}

export default App;
