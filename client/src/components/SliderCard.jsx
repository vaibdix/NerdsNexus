import { motion } from "framer-motion";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buttonClick } from "../animations";
import { addNewItemToCart, getAllCartItems } from "../api";
import { HiCurrencyRupee, IoBasket } from "../assets/icons";
import { alertNULL, alertSuccess } from "../context/actions/alertActions";
import { setCartItems } from "../context/actions/cartAction";

const SliderCard = ({ data, index }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const sendToCart = () => {
    dispatch(alertSuccess("Added to the cart"));
    addNewItemToCart(user?.user_id, data).then((res) => {
      getAllCartItems(user?.user_id).then((items) => {
        dispatch(setCartItems(items));
      });
      setInterval(() => {
        dispatch(alertNULL());
      }, 3000);
    });
  };

  return (
    // <div className="bg-lightOverlay hover:drop-shadow-lg backdrop-blur-md rounded-xl flex items-center justify-between relative px-4 py-2 w-full md:w-340 md:min-w-350 gap-3">
    //   <img src={data.imageURL} className="w-40 h-40 object-contain" alt="" />
    //   <div className="relative pt-12">
    //     <p className="text-xl text-headingColor font-semibold">
    //       {data.product_name}
    //     </p>
    //     <p className="text-lg font-semibold text-red-500 flex items-center justify-center gap-1">
    //       <HiCurrencyRupee className="text-red-500" />{" "}
    //       {parseFloat(data.product_price).toFixed(2)}
    //     </p>

    //     <motion.div
    //       {...buttonClick}
    //       onClick={sendToCart}
    //       className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center absolute -top-4 right-2 cursor-pointer"
    //     >
    //       <IoBasket className="text-2xl text-primary" />
    //     </motion.div>
    //   </div>
    // </div>

    <div class="flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <a
        class="mx-3 mt-3 flex h-30 overflow-hidden rounded-xl"
        href="#"
      >
        <img class="object-cover" src={data.imageURL} alt="product image" />
      </a>
      <div class="mt-4 px-5 pb-5">
        <a href="#">
          <h5 class="text-xl font-bold tracking-tight text-slate-900">
            {data.product_name}
          </h5>
        </a>

        <div class="flex items-center mt-5 justify-between">
          <p>
            <span class="text-xl font-bold text-slate-900">
              ₹{parseFloat(data.product_price).toFixed(2)}
            </span>
          </p>
          <a
            href="#"
            onClick={sendToCart}
            {...buttonClick}
            class="flex items-center rounded-md bg-[#191414] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mr-2 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
