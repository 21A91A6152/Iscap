import React from "react";
import Courses from "./courses";
import InternshipsBanner from "./internship";
import CareerGuidanceBanner from "./carrerguidence";
import ReferralsBanner from "./referal";
import QuizHomePage from "./quiz";
import AssessmentsHomePage from "./assessment";
import CertificatesHomePage from "./certificates";
import MentorSupportHomePage from "./mentor";
import Review from "./review";
import RewardPointsRedeem from "./redeem";
import coverImage from "../assets/images/cover.jpg"; 
 import UserResults from "./report";
const Home = () => {
  return (
    <div> 
    <div
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${coverImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="text-white px-4 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to Our Platform
          </h1>
          <p className="text-lg md:text-xl mb-6">
          Educational website for students who have enthusiasm to learn
          </p>
          <button className="py-2 px-6 bg-blue-500 text-white text-lg font-semibold rounded hover:bg-blue-600 transition">
            Get Started
          </button>
        </div>
      </div>
    </div>
    <Courses/>
    <InternshipsBanner/>
    <MentorSupportHomePage/>
    <CareerGuidanceBanner/>
    <AssessmentsHomePage/>
    <CertificatesHomePage/>
    <QuizHomePage/>
      <UserResults/>
    <ReferralsBanner/>
    <Review/>
    <RewardPointsRedeem/>
   
    </div>
  );
};

export default Home;
