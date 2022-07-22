import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import About from "../../components/home/about/About";
import Clients from "../../components/home/clients/Clients";
import Feature from "../../components/home/features/Feature";
import Hero from "../../components/home/hero/Hero";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      if (localStorage.getItem("role") === "user") {
        navigate("/dashboard", { replace: true });
      } else {
        navigate("/admin/dashboard", { replace: true });
      }
    }
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <Feature />
      <About />
      <Clients />
      <Footer />
    </div>
  );
}

export default Home;
