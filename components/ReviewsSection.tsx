"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";

type Review = {
  id: number;
  name: string;
  rating: number;
  comment: string;
  created_at: string;
};

function StarRating({ value, onChange }: { value: number; onChange?: (v: number) => void }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={!onChange}
          onClick={() => onChange?.(star)}
          className={`h-5 w-5 ${onChange ? "cursor-pointer" : "cursor-default"}`}
        >
          <Star
            className={`h-full w-full ${
              star <= value
                ? "fill-yellow-400 text-yellow-400"
                : "fill-gray-200 text-gray-200"
            }`}
          />
        </button>
      ))}
    </div>
  );
}

export function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [average, setAverage] = useState(0);
  const [total, setTotal] = useState(0);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const fetchReviews = () => {
    fetch("/api/reviews")
      .then((r) => r.json())
      .then((data) => {
        setReviews(data.reviews);
        setAverage(data.averageRating);
        setTotal(data.totalReviews);
      })
      .catch(() => {});
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, rating, comment }),
      });
      if (res.ok) {
        setSubmitted(true);
        setName("");
        setRating(5);
        setComment("");
        fetchReviews();
        setTimeout(() => setSubmitted(false), 3000);
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-5xl px-6 py-16 lg:py-20">
        <div className="mb-12 inline-block rounded-xl bg-gray-900 px-6 py-3 shadow-sm">
          <h2 className="text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl">
            Reviews
          </h2>
        </div>

        <div className="mb-12 flex items-center gap-4 rounded-xl border border-gray-200 bg-gray-50 p-6">
          <div className="text-5xl font-bold text-gray-900">{average.toFixed(1)}</div>
          <div>
            <StarRating value={Math.round(average)} />
            <p className="mt-1 text-sm text-gray-500">{total} review{total !== 1 ? "s" : ""}</p>
          </div>
        </div>

        <div className="mb-12 grid gap-4">
          {reviews.length === 0 && (
            <p className="text-center text-gray-400">No reviews yet. Be the first!</p>
          )}
          {reviews.map((review) => (
            <div key={review.id} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-900">{review.name}</span>
                <StarRating value={review.rating} />
              </div>
              <div className="my-3 h-px w-full bg-gray-100" />
              <p className="text-gray-600 leading-relaxed">{review.comment}</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
          <h3 className="mb-4 text-lg font-bold text-gray-900">Leave a Review</h3>
          {submitted && (
            <p className="mb-4 rounded-lg bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
              Review submitted! Thank you.
            </p>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                maxLength={255}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 outline-none focus:border-gray-900"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Rating</label>
              <StarRating value={rating} onChange={setRating} />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Comment</label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
                rows={3}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 outline-none focus:border-gray-900 resize-none"
                placeholder="Share your experience..."
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="rounded-lg bg-gray-900 px-6 py-2 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-gray-800 disabled:opacity-50"
            >
              {submitting ? "Submitting..." : "Submit Review"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
