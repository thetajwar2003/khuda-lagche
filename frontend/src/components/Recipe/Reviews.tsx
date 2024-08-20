import React from "react";

interface Review {
  reviewerName: string;
  comment: string;
}

interface ReviewsProps {
  reviews: Review[];
}

export default function Reviews({ reviews }: ReviewsProps) {
  return (
    <div className="border-2 border-secondary rounded-lg shadow-lg p-6 mt-6">
      <h2 className="text-2xl font-semibold text-white mb-4">Reviews</h2>
      {reviews.map((review, index) => (
        <div key={index} className="border-t border-gray-500 pt-4">
          <p className="text-gray-300">"{review.comment}"</p>
          <div className="text-sm text-gray-400">- {review.reviewerName}</div>
        </div>
      ))}
    </div>
  );
}
