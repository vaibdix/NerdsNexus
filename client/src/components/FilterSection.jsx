import { motion } from "framer-motion";
import React, { useState } from "react";
import { IoFastFood, IoRocket } from "../assets/icons";
import { useSelector } from "react-redux";
import { staggerFadeInOut } from "../animations";
import { statuses } from "../utils/styles";
import SliderCard from "./SliderCard";

const FilterSection = () => {
  const [category, setCategory] = useState("fruits");
  const products = useSelector((state) => state.products);

  return (
    <motion.div className="w-full flex items-start justify-start flex-col">
      <div className=" w-full flex items-center justify-between ">
        <div className="flex flex-col items-start justify-start gap-1">
          <p className="text-2xl text-headingColor font-bold">All Products</p>
          <div className="w-40 h-1 rounded-md bg-[#a685ff]"></div>
        </div>
      </div>

      <div className="w-full overflow-x-scroll pt-6 flex items-center justify-center gap-6 py-8">
        {statuses &&
          statuses.map((data, i) => (
            <FilterCard
              data={data}
              category={category}
              setCategory={setCategory}
              index={i}
            />
          ))}
      </div>

      <div className=" w-full flex items-center justify-evenly flex-wrap gap-4 mt-12 ">
        {products &&
          products
            .filter((data) => data.product_category === category)
            .map((data, i) => <SliderCard key={i} data={data} index={i} />)}
      </div>
    </motion.div>
  );
};

export const FilterCard = ({ data, index, category, setCategory }) => {
  return (
    <motion.div
      key={index}
      {...staggerFadeInOut(index)}
      onClick={() => setCategory(data.category)}
      className={`cursor-pointer ${
        category === data.category ? "text-[#191414]" : "bg-primary"
      }   flex flex-col items-center justify-center `}
    >
      <p
        className={`ml-3 text-xl font-semibold ${
          category === data.category
            ? " mt-4 rounded-lg  bg-[#191414] px-6 py-2 font-medium text-[#fff] transition hover:translate-y-1"
            : "mt-4 rounded-lg border-[#191414] border-2  px-6 py-2 font-medium text-[#191414] transition hover:translate-y-1"
        } group-hover:text-primary`}
      >
        {data.title}
      </p>
    </motion.div>
  );
};

export default FilterSection;
