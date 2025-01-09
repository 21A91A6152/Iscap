import React, { useState } from "react";

const Review = () => {
  const [reviews] = useState([
    {
      name: "Jane Doe",
      rating: 5,
      comment: "This has helped me so much in my career...I joined as a frontend engineer and eventually transitioned to full stack engineer with the help of this course",
    },
    {
      name: "John Smith",
      rating: 4,
      comment: "I am placed in Accenture. i would like to thank iscap services ",
    },
    {
      name: "Emily Johnson",
      rating: 5,
      comment: "Today, I am a software developer, and I credit a significant part of my success to the solid foundation laid by this course.",
    },
    {
      name: "Michael Brown",
      rating: 3,
      comment: "In terms of content, company specific training, Support we get from team when we need is fabolous",
    },
  ]);

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Display Reviews */}
        <h2 className="text-2xl font-semibold mb-6 text-center">Student Reviews</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-lg font-semibold">{review.name}</div>
                <div className="ml-2 text-yellow-500">
                  {"★".repeat(review.rating)}{" "}
                  {"☆".repeat(5 - review.rating)} {/* Display stars */}
                </div>
              </div>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
