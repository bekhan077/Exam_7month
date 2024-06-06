import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import Logo from "../../public/assets/Logo.svg";

import { ProductContext } from "../App";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";
import { HiOutlineLogout } from "react-icons/hi";
import { IoSearchSharp } from "react-icons/io5";
import { Data } from "../data/data";

const Navbar = () => {
  const { product } = useContext(ProductContext);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchIconClick = () => {
    setIsSearchModalOpen(true);
  };

  const handleCloseModalClick = () => {
    setIsSearchModalOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = Data.filter((item) =>
    item.common_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="pt-[25px] top-0 bg-white mb-[12px] fixed z-50 w-full">
        <div className="w-[1200px] flex items-start justify-between">
          <NavLink
            to="/"
            className="h-[45px] logo text-[16px] font-normal text-[#3d3d3d]"
          >
            <img src={Logo} alt="logo" className="w-[150px] h-[34px]" />
          </NavLink>
          <div className="flex items-start gap-[50px]">
            <NavLink
              to="/"
              className="h-[45px] text-[16px] font-normal text-[#3d3d3d]"
            >
              Home
            </NavLink>
            <NavLink
              to="/shop"
              className="h-[45px] text-[#3d3d3d] text-[16px] font-normal "
            >
              Shop
            </NavLink>
            <NavLink
              to="/plantcare"
              className="h-[45px] text-[#3d3d3d] w-[80px] text-[16px] font-normal "
            >
              Plant Care
            </NavLink>
            <NavLink
              to="/blogs"
              className="h-[45px] text-[#3d3d3d] text-[16px] font-normal "
            >
              Blogs
            </NavLink>
          </div>
          <div className="flex items-center gap-[30px]">
            <IoSearchSharp
              className="text-[22px] h-[35px] hover:cursor-pointer hover:scale-110 duration-300"
              onClick={handleSearchIconClick}
            />
            <div className="relative">
              <NavLink
                to="/shop/basket"
                className="basket h-[45px] text-[#3d3d3d] text-[16px] font-normal "
              >
                <MdOutlineShoppingCart className="text-[22px] hover:text-[#46A358] text-[#3D3D3D] hover:cursor-pointer" />
              </NavLink>
              <div className="absolute top-[-5px] right-[-9px] bg-[#46A358] flex items-center justify-center border h-[15px] rounded-[50%] w-[15px]">
                <p className="text-[10px] text-white">{product.length}</p>
              </div>
            </div>

            <SignedOut>
              <SignInButton>
                <div className="h-[45px] mb-[10px] text-[16px] basket hover:cursor-pointer  font-normal text-[#3d3d3d]">
                  <div className="w-[100px] h-[35px] rounded-[6px] bg-[#46A358] flex items-center justify-center gap-1">
                    <HiOutlineLogout className="text-[22px] text-white" />
                    <p className="text-[16px] text-white font-medium">Login</p>
                  </div>
                </div>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
        <hr className="w-full h-[0.3px] border-none bg-[#46A35880]" />
      </div>
      {isSearchModalOpen && (
        <div className="fixed bg-black top-0 left-0 w-full z-50 opacity-90 h-full flex justify-center items-center">
          <div className="w-[500px] h-[500px] bg-white relative p-5">
            <p
              className="text-end cursor-pointer"
              onClick={handleCloseModalClick}
            >
              X
            </p>
            <input
              className="border w-full p-2 mb-4"
              type="text"
              placeholder="Search by name..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <div className="overflow-y-auto max-h-[400px]">
              {filteredData.map((item) => (
                <div key={item.id} className="mb-4 flex items-center">
                  <img
                    src={item.image_url}
                    alt={item.common_name}
                    className="w-10 h-auto mr-4"
                  />
                  <p>{item.common_name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
