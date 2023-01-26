import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Welcome from "./pages/Welcome/WelcomePage";

import { UserProvider } from "./contexts/UserContext";
import SignUp from "./pages/Sign/SignUpPage";
import SignIn from "./pages/Sign/SignInPage";

function App() {
  return (
    <>
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
          </Routes>
        </Router>
      </UserProvider>
    </>
  );
}

export default App;
