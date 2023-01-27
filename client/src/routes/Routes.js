import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Welcome from "../pages/Welcome/WelcomePage";
import SignUp from "../pages/Sign/SignUpPage";
import SignIn from "../pages/Sign/SignInPage";
import PrivatePage from "./PrivateRoutes";
import Home from "../pages/Home/HomePage";
import Account from "../pages/Account/AccountPage";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/" element={<PrivatePage />}>
          <Route path="account" element={<Account />} />
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}
