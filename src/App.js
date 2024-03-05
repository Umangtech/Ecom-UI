import "./App.css";
// import Header from "./compoents/Header";
import { Button } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import Home from "./compoents/Home";

function App() {
  const notificationHandle = () => {
    toast("Notification Handler");
  };

  return (
    <div>
      <ToastContainer />
      <Home />
      <Button outline color="primary" onClick={notificationHandle}>
        Click here
      </Button>
    </div>
  );
}

export default App;
