import React, { useEffect } from "react";
import HeaderComponent from "../../components/Header";
import ProductOverview from "../../components/ProductOverview";
import BestSelling from "../../components/BestSelling";
import TestimonialComponent from "../../components/Testimonials";
import Features from "../../components/Features";
import { useAuth } from "../../context/authcontext";

const HomePage = () => {
  const { GetAllCartItems, setShowNavbar } = useAuth();

  useEffect(() => {
    GetAllCartItems();
    setShowNavbar(true);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="bg-white">
      <HeaderComponent />
      <ProductOverview />
      <BestSelling />
      <TestimonialComponent />
      <Features />
    </div>
  );
};

export default HomePage;
