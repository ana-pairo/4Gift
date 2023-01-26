import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Welcome from "./pages/Welcome/WelcomePage";

import { UserProvider } from "./contexts/UserContext";
import SignUp from "./pages/Sign/SignUpPage";

function App() {
  return (
    <>
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </Router>
      </UserProvider>
    </>
  );
}

export default App;
