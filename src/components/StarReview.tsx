"use client"

import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { FaStar } from "react-icons/fa";
import { Product } from "../../sanity.types";

// Define the review type
interface Review {
  _id: string;
  name: string;
  rating: number;
  comment: string;
  createdAt: string;
}

interface ReviewProps {
  product: Product;
}

const StarReview = ({ product }: ReviewProps) => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const reviewsQuery = `*[_type == "review" && productId._ref == $productId] | order(createdAt desc) {
      _id,
      name,
      rating,
      comment,
      createdAt
    }`;

    // Fetch the reviews for the product
    const fetchReviews = async () => {
      const fetchedReviews = await client.fetch(reviewsQuery, {
        productId: product._id,
      });
      setReviews(fetchedReviews);
    };

    fetchReviews();

    // Subscribe to real-time updates
    const subscription = client.listen(
      `*[_type == "review" && productId._ref == $productId]`,
      { productId: product._id }
    ).subscribe(async (update) => {
      // Access the documentId from the update and fetch the review
      const documentId = update.documentId;

      if (documentId) {
        // Fetch the full document by documentId
        const fetchedReview = await client.fetch(
          `*[_id == $documentId]`,
          { documentId }
        );

        // Update the reviews state with the new review or modify an existing review
        if (fetchedReview.length > 0) {
          const newReview = fetchedReview[0];
          setReviews((prevReviews) => {
            // Check if the review already exists, and if it does, update it
            const reviewExists = prevReviews.some(
              (review) => review._id === newReview._id
            );

            if (reviewExists) {
              return prevReviews.map((review) =>
                review._id === newReview._id ? newReview : review
              );
            } else {
              return [newReview, ...prevReviews]; // Add the new review
            }
          });
        }
      }
    });

    // Cleanup the subscription when the component unmounts
    return () => {
      subscription.unsubscribe();
    };
  }, [product._id]);

  const totalRatings = reviews.reduce((sum, review) => sum + review.rating, 0);
  const averageRating = reviews.length ? totalRatings / reviews.length : 0;

  return (
    <div>
      <div className="flex items-center space-x-2 text-[#FFC416]">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={i < Math.round(averageRating) ? "text-yellow-500" : "text-gray-300"}
          />
        ))}
        <p className="text-[#151875] font-josefin">
          ({reviews.length}) {/* Number of reviews */}
        </p>
      </div>
    </div>
  );
};

export default StarReview;
