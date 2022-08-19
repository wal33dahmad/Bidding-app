import Home from "./components/Home";
import AddProduct from "./components/AddProduct";
import BidProduct from "./components/BidProduct";
import Nav from "./components/Nav";
import Products from "./components/Products";
import socketIO from "socket.io-client";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

const socket = socketIO("http://localhost:4000");

function App() {
  return (
    <Router>
      <div>
        <Nav socket={socket} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products socket={socket} />} />
          <Route
            path="/products/add"
            element={<AddProduct socket={socket} />}
          />
          <Route
            path="/products/bid/:name/:price"
            element={<BidProduct socket={socket} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
