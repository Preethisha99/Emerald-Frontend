import "./App.css";
import Home from "./Components/Home";
import Footer from "./Components/Layouts/Footer";
import Header from "./Components/Layouts/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //React Router Set-Up
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ProductDetails from "./Components/Product/ProductDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <HelmetProvider>
            <Header />
            <div className="container container-fluid">
                <ToastContainer theme="dark"/>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/product/:id" element={<ProductDetails/>}/>
                </Routes>
            </div>
            <Footer />
        </HelmetProvider>
      </div>
    </Router>
  );
}

export default App;
