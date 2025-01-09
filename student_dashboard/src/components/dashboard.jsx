import React from "react";
import DashboardCard from "./dashboardcard";
import { FaBook, FaBriefcase, FaTasks, FaAward } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      <DashboardCard title="Courses Completed" value="5" icon={<FaBook />} />
      <DashboardCard title="Internships Applied" value="3" icon={<FaBriefcase />} />
      <DashboardCard title="Assessments Completed" value="10" icon={<FaTasks />} />
      <DashboardCard title="Certificates Earned" value="2" icon={<FaAward />} />
    </div>
  );
};

export default Dashboard;
