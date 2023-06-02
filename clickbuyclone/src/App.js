import "./App.css";
import InformationPhone from "./components/InformationPhone";
import { Routes, Route } from "react-router-dom";
import ListSamsung from "./components/list/ListPhone";
import ListXiaomi from "./components/list/ListXiaomi";
import ListIphone from "./components/list/ListIphone";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Register from "./components/Register";
// import ListSp from "../../../CRUD/json-server/json-server/src/admin/ListSP";
// import AdminPhone from "../../../CRUD/json-server/json-server/src/admin/AdminPhone";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/listsamsung" element={<ListSamsung />}></Route>
        <Route path="/listiphone" element={<ListIphone />}></Route>
        <Route path="/listxiaomi" element={<ListXiaomi />}></Route>
        <Route path="/inforphone/:id" element={<InformationPhone />}></Route>
        <Route path="/cart" element={<Cart />}>
          <Route path="/cart/:id" element={<Cart />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        {/* <Route path="/loginadmin" element={<AdminPhone />}></Route> */}
        {/* <Route path="/listsp" element={<ListSp />}></Route> */}

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
