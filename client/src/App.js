import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./contexts/UserContext";
import AppRoutes from "./routes/Routes";

function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <UserProvider>
        <AppRoutes />
      </UserProvider>
    </>
  );
}

export default App;
