import "./App.css";
import Header from "./compoents/Header";
import { Button } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import Home from "./compoents/Home";
import Footer from "./compoents/Footer";
import AllProduct from "./compoents/AllProduct";
import AddProduct from "./compoents/AddProduct";

function App() {
  const notificationHandle = () => {
    toast("Notification Handler");
  };

  return (
    <div>
      <ToastContainer />
      <Header />

      <Home />

      <AllProduct />

      <AddProduct />

      <Button outline color="primary" onClick={notificationHandle}>
        Click here
      </Button>

      <Footer />
    </div>
  );
}

export default App;
