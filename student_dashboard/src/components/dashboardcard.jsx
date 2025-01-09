import React from "react";

const DashboardCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex items-center">
      <div className="text-blue-600 text-3xl">{icon}</div>
      <div className="ml-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-gray-700">{value}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
