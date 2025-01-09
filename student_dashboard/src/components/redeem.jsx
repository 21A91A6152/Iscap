import React from "react";
import rewardImage from "../assets/images/gift.jpg"; // Import your image here

const RewardPointsRedeem = () => {
  return (
    <div className="flex items-center justify-center py-6">
      <div className="bg-blue-100 flex flex-col items-center md:flex-row max-w-6xl mx-auto px-6 py-6">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Reward Points Redeem
          </h1>
          <p className="text-lg text-gray-600 mt-2 text-center md:text-left">
            Redeem your points and get exciting vouchers, discounts, and more!
          </p>
          <div className="mt-4">
            <button
              onClick={() => alert("Redeem Now clicked!")}
              className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Redeem Now
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:ml-8">
          <img
            src={rewardImage}
            alt="Reward Points"
            className="w-full md:w-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default RewardPointsRedeem;
