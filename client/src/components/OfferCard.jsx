import React from "react";

const OfferCard = () => {
  return (
    <div className="w-full rounded-sm bg-[#191414]">
      <div className="">
        <div className="grid items-center">
          <div className="flex flex-col justify-center text-center">
            <div className="w-full p-6 py-12 items-center flex justify-center dark:bg-violet-400 text-gray-900">
              <div className="mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                  <h2 className="text-center text-6xl tracki font-bold">
                    Up to
                    <br className="sm:hidden" />
                    50% Off
                  </h2>
                  <div className="space-x-2 px-5 text-center py-2 lg:py-0">
                    <span>Plus free shipping! Use code:</span>
                    <span className="font-bold text-lg">NERD</span>
                  </div>
                  <a
                    href="#"
                    rel="noreferrer noopener"
                    className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
