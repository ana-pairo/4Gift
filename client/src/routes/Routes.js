import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Welcome from "../pages/Welcome/WelcomePage";
import SignUp from "../pages/Sign/SignUpPage";
import SignIn from "../pages/Sign/SignInPage";
import PrivatePage from "./PrivateRoutes";
import Home from "../pages/Home/HomePage";
import Account from "../pages/Account/AccountPage";
import FriendsList from "../pages/FriendsList/FriendsListPage";
import Profile from "../pages/Profile/ProfilePage";
import AuthProvider from "../contexts/AuthContext";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route
          path="/sign-up"
          element={
            <AuthProvider>
              <SignUp />
            </AuthProvider>
          }
        />
        <Route
          path="/sign-in"
          element={
            <AuthProvider>
              <SignIn />
            </AuthProvider>
          }
        />

        <Route path="/" element={<PrivatePage />}>
          <Route path="account" element={<Account />} />
          <Route path="home" element={<Home />} />
          <Route path="friends" element={<FriendsList />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}
