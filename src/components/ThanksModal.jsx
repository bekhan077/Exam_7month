import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

const ThanksModal = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 flex items-center z-200 justify-center bg-black bg-opacity-50 transition-opacity duration-1000 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="bg-white p-8 rounded shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-700"
          onClick={() => setVisible(false)}
        >
          <IoMdClose size={24} />
        </button>
        <p className="text-lg text-center">Thanks for shopping with us!</p>
      </div>
    </div>
  );
};

export default ThanksModal;
