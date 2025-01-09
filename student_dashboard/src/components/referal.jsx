import React from "react";
import img from"../assets/images/referal.jpg";

const ReferralsBanner = () => {
  return (
    <div className="  flex items-center justify-center py-6">
      <div className="bg-green-100 flex flex-col items-center md:flex-row max-w-6xl mx-auto px-6 py-6">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Grow Together with Referrals
          </h1>
          <p className="text-lg text-gray-600 mt-2 text-center md:text-left">
            Share opportunities with your network and get rewarded for every successful referral!
          </p>
          <div className="flex mt-4 space-x-3">
            <div className="bg-green-300 rounded-md p-2">
              <span className="text-sm text-gray-700 font-medium">Earn Rewards</span>
            </div>
            <div className="bg-green-300 rounded-md p-2">
              <span className="text-sm text-gray-700 font-medium">Expand Your Network</span>
            </div>
            <div className="bg-green-300 rounded-md p-2">
              <span className="text-sm text-gray-700 font-medium">Help Others</span>
            </div>
          </div>
          <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-500">
            Refer Now
          </button>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:ml-8">
          <img
            src={img}
            alt="Referrals"
            className="w-full md:w-96 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ReferralsBanner;
