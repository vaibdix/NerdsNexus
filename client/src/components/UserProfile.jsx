import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Avatar } from "../assets";
import Header from "./Header";
import Footer from "./Footer";
import { MdVerified, MdVerifiedUser } from "react-icons/md";

const UserProfile = () => {
  // Access user data from Redux store
  const user = useSelector((state) => state.user);
  const isGoogleUser = /@gmail\.com$|@googlemail\.com$/.test(user.email);

  const [userTimezone, setUserTimezone] = useState(null);

  useEffect(() => {
    if (user) {
      // Fetch the user's timezone
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      setUserTimezone(timezone);
    }
  }, [user]);

  return (
    <>
      <div>
        <Header />
        <div className="mt-20 mb-7">
        <h1 className="text-xl font-bold text-orange-600 text-center">User Profile</h1>
        {user ? (
         <div class="flex flex-col justify-center items-center">
         <div class="relative flex flex-col items-center rounded-[20px] w-[400px] mx-auto p-4 bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none">
             <div class="relative flex h-32 w-full justify-center rounded-xl bg-cover" >
                 <img src='https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/banner.ef572d78f29b0fee0a09.png' class="absolute flex h-32 w-full justify-center rounded-xl bg-cover" /> 
                 <div class="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
                     <img class="h-full w-full rounded-full" src={user?.picture ? user?.picture : Avatar} alt="" />
                 </div>
             </div> 
             <div class="mt-16 flex flex-col items-center">
                 <h4 class="text-xl font-bold text-emerald-800">
                 {user?.name}
                 </h4>
                 <p class="text-base font-normal text-gray-600"> {user?.email}</p>
             </div> 
             <div class="mt-6 mb-3 flex gap-14 md:!gap-14">
             {isGoogleUser ? (
                <p className="flex mb-4 text-sm font-medium text-gray-500">

                  
                  Google user{<MdVerified className="text-blue-700 flex ml-2 -mx-5"/>}
                </p>
              ) : (
                <p className="mb-4 text-sm font-medium text-gray-500">Not a verified user</p>
              )}
                <p className="text-gray-500">Timezone: {userTimezone}</p>
             </div>
         </div>  
         
     </div>
        ) : (
          <p>Loading user data...</p>
        )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserProfile;
