import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Posts from "../components/Posts";
import Duality from "../components/Duality";
import Carousel from "../components/Carousel";
import Home_cards from "../components/Home_cards";
import ThanksModal from "../components/ThanksModal";

const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const [showThanksModal, setShowThanksModal] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state && location.state.showThanksModal) {
      setShowThanksModal(true);
      setTimeout(() => {
        setShowThanksModal(false);
        navigate("/", { state: {} }); //   // Location.state ni reset qilish
      }, 5000); // 5 soniya
    }
  }, [location.state, navigate]);

  return (
    <>
      {showThanksModal && <ThanksModal />}
      <div className="w-full relative">
        <Carousel />
        <Home_cards />
        <Duality />
        <Posts />
      </div>
    </>
  );
};

export default Home;
