import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Dual from "../components/Dual";
import Post from "../components/Post";
import HomeCards from "../components/HomeCards";
import Carousel from "../components/Carousel";
import ThanksModal from "../components/ThanksModal";

const HomePage = () => {
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
        navigate("/", { state: {} });
      }, 5000);
    }
  }, [location.state, navigate]);

  return (
    <>
      {showThanksModal && <ThanksModal />}
      <div className="w-full relative">
        <Carousel />
        <HomeCards />
        <Dual />
        <Post />
      </div>
    </>
  );
};

export default HomePage;
