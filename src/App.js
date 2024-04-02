import "./App.css";
import Header from "./compoents/Header";
import { Button, Container, Row, Col } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import Home from "./compoents/Home";
import Footer from "./compoents/Footer";
import AllProduct from "./compoents/AllProduct";
import AddProduct from "./compoents/AddProduct";
import SideMenu from "./compoents/SideMenu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  // const notificationHandle = () => {
  //   toast("Notification Handler");
  // };

  return (
    <div>
      <Router>
        <ToastContainer />
        <Header />
        <Container>
          <Row>
            <Col md={4}>
              <SideMenu />
            </Col>
            <Col md={8}>
              <Routes>
                <Route path="/" Component={Home} exact />
                <Route path="/view-product" Component={AllProduct} exact />
                <Route path="/add-product" Component={AddProduct} exact />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
