import './Review.css';
import { useQuery } from '@tanstack/react-query';

function Review() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['productReviews'],
    queryFn: async () => {
      const res = await fetch('https://dummyjson.com/products/3'); // single product
      return res.json();
    }
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading reviews</p>;

  const reviews = data?.reviews || [];

  return (
    
    <div className="reviews-container">
    
      {reviews.length === 0 ? (
        <p>No reviews yet</p>
      ) : (
        reviews.map((rev, index) => (
          <div key={index} className="review-card">
            <div className="review-header">
              <strong>{rev.reviewerName}</strong>
              <span className="review-date">
                {new Date(rev.date).toLocaleDateString()}
              </span>
            </div>
            <div className="review-rating">⭐ {rev.rating}</div>
            <p className="review-comment">"{rev.comment}"</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Review;
