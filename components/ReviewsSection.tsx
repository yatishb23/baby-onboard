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
    <div style={{ display: "flex", gap: 2 }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={!onChange}
          onClick={() => onChange?.(star)}
          style={{ width: 16, height: 16, background: "none", border: "none", cursor: onChange ? "pointer" : "default", padding: 0 }}
        >
          <Star
            size={16}
            fill={star <= value ? "var(--text-tertiary)" : "var(--border)"}
            color={star <= value ? "var(--text-tertiary)" : "var(--border)"}
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
    <div className="content-section">
      <div className="section-header">
        <h2>Reviews</h2>
      </div>

      <div className="card" style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
        <span style={{ fontSize: 28, fontWeight: 600 }}>{average.toFixed(1)}</span>
        <div>
          <StarRating value={Math.round(average)} />
          <p style={{ fontSize: 13, color: "var(--text-tertiary)", margin: 0 }}>{total} review{total !== 1 ? "s" : ""}</p>
        </div>
      </div>

      <div style={{ display: "grid", gap: 8, marginBottom: 24 }}>
        {reviews.length === 0 && (
          <p style={{ fontSize: 14, color: "var(--text-tertiary)", textAlign: "center" }}>No reviews yet. Be the first!</p>
        )}
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span className="review-name">{review.name}</span>
              <StarRating value={review.rating} />
            </div>
            <p className="review-comment">{review.comment}</p>
          </div>
        ))}
      </div>

      <div className="card">
        <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 16 }}>Leave a Review</h3>
        {submitted && (
          <p style={{ fontSize: 13, color: "var(--text-secondary)", marginBottom: 12 }}>
            Review submitted! Thank you.
          </p>
        )}
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div>
            <label className="form-label">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              maxLength={255}
              className="form-input"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="form-label">Rating</label>
            <StarRating value={rating} onChange={setRating} />
          </div>
          <div>
            <label className="form-label">Comment</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
              rows={3}
              className="form-input"
              placeholder="Share your experience..."
              style={{ resize: "none" }}
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="btn btn-primary"
            style={{ alignSelf: "flex-start" }}
          >
            {submitting ? "Submitting..." : "Submit Review"}
          </button>
        </form>
      </div>
    </div>
  );
}
