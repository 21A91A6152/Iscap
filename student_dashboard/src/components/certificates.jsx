import React from "react";
import cert from "../assets/images/certi.jpg"
const CertificatesHomePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-12">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
          Your Achievements, Certified!
        </h1>
        <p className="text-lg text-gray-700 mt-4">
          Explore our certificate services to showcase your accomplishments.
        </p>
      </div>

      {/* Certificates Categories Section */}
      <div className="mt-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {/* Participation Certificate */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <div className="w-16 h-16 bg-blue-100 flex items-center justify-center rounded-full">
            <img
              src={cert}
              alt="Participation Icon"
              className="w-10 h-10"
            />
          </div>
          <h3 className="text-xl font-semibold text-blue-800 mt-4">
            Participation Certificates
          </h3>
          <p className="text-gray-600 text-center mt-2">
            Get certificates for participating in events, competitions, or workshops.
          </p>
          <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-500">
            Explore Now
          </button>
        </div>

        {/* Course Completion Certificate */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <div className="w-16 h-16 bg-green-100 flex items-center justify-center rounded-full">
            <img
              src={cert}
              alt="Course Completion Icon"
              className="w-10 h-10"
            />
          </div>
          <h3 className="text-xl font-semibold text-green-800 mt-4">
            Course Completion Certificates
          </h3>
          <p className="text-gray-600 text-center mt-2">
            Certify your learning achievements with professional course completion certificates.
          </p>
          <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-500">
            Explore Now
          </button>
        </div>

        {/* Appreciation Certificate */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <div className="w-16 h-16 bg-yellow-100 flex items-center justify-center rounded-full">
            <img
              src={cert}
              alt="Appreciation Icon"
              className="w-10 h-10"
            />
          </div>
          <h3 className="text-xl font-semibold text-yellow-800 mt-4">
            Appreciation Certificates
          </h3>
          <p className="text-gray-600 text-center mt-2">
            Show gratitude and recognize contributions with appreciation certificates.
          </p>
          <button className="mt-4 bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-500">
            Explore Now
          </button>
        </div>

        {/* Achievement Certificate */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <div className="w-16 h-16 bg-purple-100 flex items-center justify-center rounded-full">
            <img
              src={cert}
              alt="Achievement Icon"
              className="w-10 h-10"
            />
          </div>
          <h3 className="text-xl font-semibold text-purple-800 mt-4">
            Achievement Certificates
          </h3>
          <p className="text-gray-600 text-center mt-2">
            Celebrate your milestones with achievement certificates.
          </p>
          <button className="mt-4 bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-500">
            Explore Now
          </button>
        </div>

        {/* Certification of Excellence */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <div className="w-16 h-16 bg-red-100 flex items-center justify-center rounded-full">
            <img
              src={cert}
              alt="Excellence Icon"
              className="w-10 h-10"
            />
          </div>
          <h3 className="text-xl font-semibold text-red-800 mt-4">
            Certification of Excellence
          </h3>
          <p className="text-gray-600 text-center mt-2">
            Showcase outstanding performance with certificates of excellence.
          </p>
          <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-500">
            Explore Now
          </button>
        </div>

        {/* Custom Certificates */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <div className="w-16 h-16 bg-indigo-100 flex items-center justify-center rounded-full">
            <img
              src={cert}
              alt="Custom Icon"
              className="w-10 h-10"
            />
          </div>
          <h3 className="text-xl font-semibold text-indigo-800 mt-4">
            Custom Certificates
          </h3>
          <p className="text-gray-600 text-center mt-2">
            Create personalized certificates tailored to your needs.
          </p>
          <button className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-500">
            Explore Now
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-12 text-center">
        <p className="text-gray-700">
          Ready to celebrate your achievements? Select a certificate service and get started today!
        </p>
      </div>
    </div>
  );
};

export default CertificatesHomePage;
