"use client";
import React, { useState } from "react";

interface RatingProps {
  aggregated_rating: number;
  review_count: number;
}

export default function Rating({
  aggregated_rating = 0.0,
  review_count,
}: RatingProps) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0); // Track the current hover rating

  const handleRatingChange = (rate: number) => {
    // Set the selected rating
    setRating(rate);
  };

  return (
    <div className="border-2 border-secondary rounded-lg shadow-lg p-6 mt-6">
      <h2 className="text-2xl font-semibold text-white mb-4">
        Rate This Recipe
      </h2>
      <div className="flex items-center mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => handleRatingChange(star)}
            onMouseEnter={() => setHoverRating(star)} // Set hover rating
            onMouseLeave={() => setHoverRating(0)} // Reset hover rating
            className={`text-3xl ${
              star <= (hoverRating || rating)
                ? rating
                  ? "text-accent"
                  : "text-accent-light"
                : "text-gray-400"
            }`} // Apply pink on hover and darker color on click
          >
            ★
          </button>
        ))}
      </div>
      <p className="text-white">
        Existing Rating: <strong>{aggregated_rating.toFixed(1)}</strong> (
        {review_count} reviews)
      </p>
    </div>
  );
}
