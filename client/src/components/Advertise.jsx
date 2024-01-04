import React, { useEffect, useRef } from "react";

const Advertise = () => {
  const vidRef = useRef();
  useEffect(() => {
    vidRef.current.play();
  }, []);

  return (
    <div>
      <div className="px-4 bg-[#bbf7d0] py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Unite Your Setup  
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Take command of your system, inside and out. Fine-tune the
                settings for all of your iCUE-compatible devices, from fan
                speeds to keyboard macros, on a single intuitive interface.
              </p>
            </div>
            <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
              <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                <div className="h-full p-5 border border-l-0 rounded-r">
                  <h6 className="mb-2 font-semibold leading-5">
                    I'll be sure to note that in my log
                  </h6>
                  <p className="text-sm text-gray-900">
                    Lookout flogging bilge rat main sheet bilge water nipper
                    fluke to go on account heave down.
                  </p>
                </div>
              </div>
              <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                <div className="h-full p-5 border border-l-0 rounded-r">
                  <h6 className="mb-2 font-semibold leading-5">
                    Experience the all new Colling systen
                  </h6>
                  <p className="text-sm text-gray-900">
                    Those options are already baked in with this model shoot me
                    an email clear.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <video
            className="object-cover w-full h-56 rounded-lg shadow-lg sm:h-96"
            src="https://res.cloudinary.com/corsair-pwa/video/upload/f_auto,q_auto/v1672825193/akamai/landing/tech-innovation/capellix_clip02.mp4"
            ref={vidRef}
            muted
            autoPlay
            loop
            controls
            preload
          />
        </div>
      </div>
    </div>
  );
};

export default Advertise;
