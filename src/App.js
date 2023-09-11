import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import { ThemeProvider } from "@material-tailwind/react";
import Dashboard from "./components/Dashboard";
import SignUp from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Axiostext from "./components/TabItems/Axiostext";
import AddUser from "./components/TabItems/VpnUsers/AddUser";
import ReNewUser from "./components/TabItems/VpnUsers/ReNewUser";
import Header from "./components/Header";
import CheckoutForm from "./components/TabItems/Traffic";
import Traffic from "./components/TabItems/Traffic";
import Wallet from "./components/TabItems/Wallet";
import Register from "./components/Register";
import ResetPass from "./components/ResetPass";
import Portal from "./components/TabItems/Portal";
import Services from "./components/Services";
// taiqr jadid
function App() {
  return (
    <>
      <div>
        <React.StrictMode>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/services" element={<Services />}></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/test" element={<Axiostext />}></Route>
              <Route path="/signup" element={<SignUp />}></Route>
              <Route path="/portal" element={<Portal />}></Route>
              <Route path="/adduser" element={<AddUser />}></Route>
              <Route path="/profile" element={<ResetPass />}></Route>

              <Route path="/renewuser" element={<ReNewUser />}></Route>
              <Route path="/traffic" element={<Traffic />}></Route>

              <Route path="/resetpass" element={<ResetPass />}></Route>
              <Route path="/axios" element={<Axiostext />}></Route>
              <Route path="/wallet" element={<Wallet />}></Route>
            </Routes>
          </BrowserRouter>
        </React.StrictMode>
      </div>
    </>
  );
}

export default App;
