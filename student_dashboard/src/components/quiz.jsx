import React from "react";
import quiz from "../assets/images/quiz.jpg"

const QuizHomePage = () => {
  return (
    <div className="bg-blue-50 min-h-screen flex flex-col items-center py-12">
      <div className="text-center">
        {/* Header Section */}
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
          Test Your Knowledge
        </h1>
        <p className="text-lg text-gray-700 mt-4">
          Take quizzes, challenge yourself, and track your progress!
        </p>
      </div>

      {/* Quiz Categories Section */}
      <div className="mt-10 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {/* Quiz Card 1 */}
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
          <div className="w-16 h-16 bg-blue-100 flex items-center justify-center rounded-full">
            <img
              src={quiz}
              alt="Quiz Category Icon"
              className="w-10 h-10"
            />
          </div>
          <h3 className="text-xl font-semibold text-blue-800 mt-4">
            Science & Technology
          </h3>
          <p className="text-gray-600 text-center mt-2">
            Explore quizzes on science, tech, and discoveries.
          </p>
          <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-500">
            Start Quiz
          </button>
        </div>

        {/* Quiz Card 2 */}
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
          <div className="w-16 h-16 bg-yellow-100 flex items-center justify-center rounded-full">
            <img
              src={ quiz}
              alt="Quiz Category Icon"
              className="w-10 h-10"
            />
          </div>
          <h3 className="text-xl font-semibold text-yellow-800 mt-4">
            General Knowledge
          </h3>
          <p className="text-gray-600 text-center mt-2">
            Test your knowledge of history, culture, and more.
          </p>
          <button className="mt-4 bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-500">
            Start Quiz
          </button>
        </div>

        {/* Quiz Card 3 */}
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
          <div className="w-16 h-16 bg-green-100 flex items-center justify-center rounded-full">
            <img
              src={ quiz}
              alt="Quiz Category Icon"
              className="w-10 h-10"
            />
          </div>
          <h3 className="text-xl font-semibold text-green-800 mt-4">
            Programming
          </h3>
          <p className="text-gray-600 text-center mt-2">
            Challenge yourself with programming quizzes.
          </p>
          <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-500">
            Start Quiz
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-12">
        <p className="text-gray-700">
          Ready to test your skills? Select a category to get started!
        </p>
      </div>
    </div>
  );
};

export default QuizHomePage;
