"use client";

import axios from "axios";
import React, { useState } from "react";
import Link from "next/link";

interface ReviewData {
  _id: string;
  name: string;
  rating: number;
  comment: string;
  createdAt: string;
}

interface ReviewProps {
  initialReviews: ReviewData[];
  productId: string; // Add productId as a prop
}

const Review: React.FC<ReviewProps> = ({ initialReviews, productId }) => {
  const [reviews, setReviews] = useState<ReviewData[]>(initialReviews);
  const [showReviews, setShowReviews] = useState(false);
  const [reviewForm, setReviewForm] = useState({
    name: "",
    rating: 0,
    comment: "",
  });
  const [submitMessage, setSubmitMessage] = useState<string>("");

  // Handle form input change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setReviewForm({ ...reviewForm, [e.target.name]: e.target.value });
  };

  // Handle review submission
  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!reviewForm.name || !reviewForm.comment || reviewForm.rating <= 0) {
      alert("All fields are required!");
      return;
    }

    try {
      const response = await axios.post("/api/review", {
        name: reviewForm.name,
        rating: reviewForm.rating,
        comment: reviewForm.comment,
        productId, // Pass the productId to the API
      });
      const newReview = response.data;

      // Update reviews list
      setReviews([newReview, ...reviews]);
      setReviewForm({ name: "", rating: 0, comment: "" }); // Reset form
      setSubmitMessage("Thanks for your review! Your feedback has been submitted.");
      setTimeout(() => setSubmitMessage(""), 5000); // Clear message after 5 seconds
    } catch (error) {
      console.error("Error submitting review:", error);
      alert("Failed to add review. Please try again.");
    }
  };

  return (
    <div>
      <div className="flex flex-wrap gap-4 text-sm lg:text-lg text-[#151875] pt-20 font-josefin">
        <Link href="/" className="hover:underline">Description</Link>
        <Link href="/" className="hover:underline">Additional Info</Link>
        <button
          onClick={(e) => {
            e.preventDefault();
            setShowReviews(!showReviews);
          }}
          className="hover:underline"
        >
          {showReviews ? "Hide Reviews" : "Show Reviews"}
        </button>
        <Link href="/" className="hover:underline">Video</Link>
      </div>

      {showReviews && (
        <div className="mt-8">
          <h3 className="text-[#151875] text-lg lg:text-2xl font-josefin">Customer Reviews</h3>
          <ul className="mt-4">
            {reviews.length > 0 ? (
              reviews.map((review) => (
                <li key={review._id} className="border-b py-4">
                  <p className="text-[#151875] font-semibold">{review.name}</p>
                  <p className="text-sm text-gray-600">Rating: {review.rating}/5</p>
                  <p className="text-[#151875]">{review.comment}</p>
                </li>
              ))
            ) : (
              <p className="text-[#A9ACC6]">No reviews yet.</p>
            )}
          </ul>

          <h3 className="text-[#151875] text-lg lg:text-2xl font-josefin mt-8">Submit a Review</h3>
          <form className="mt-4 space-y-4" onSubmit={handleReviewSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm text-[#151875]">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={reviewForm.name}
                onChange={handleInputChange}
                className="w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#151875] transition-all"
                required
              />
            </div>
            <div>
              <label htmlFor="rating" className="block text-sm text-[#151875]">Rating (1-5)</label>
              <input
                type="number"
                id="rating"
                name="rating"
                value={reviewForm.rating}
                onChange={handleInputChange}
                min="1"
                max="5"
                className="w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#151875] transition-all"
                required
              />
            </div>
            <div>
              <label htmlFor="comment" className="block text-sm text-[#151875]">Comment</label>
              <textarea
                id="comment"
                name="comment"
                value={reviewForm.comment}
                onChange={handleInputChange}
                className="w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#151875] transition-all"
                rows={4}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#FB2E86] text-white px-6 py-3 rounded-lg hover:bg-[#2b2d6e] transition-all duration-300"
            >
              Submit Review
            </button>
          </form>

          {submitMessage && (
            <p className="mt-4 text-green-600 font-semibold">{submitMessage}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Review;
