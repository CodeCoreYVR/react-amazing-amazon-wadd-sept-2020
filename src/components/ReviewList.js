import React from 'react';
import ReviewDetails from './ReviewDetails'

const ReviewList = ({reviews})=> {
  return (
    <div>
      {reviews?reviews.map((review,i) => {
        return <ReviewDetails
          key={i}
            rating={review.rating}
            id={review.id}
            body={review.body}
            reviewerName={review.reviewer?review.reviewer.full_name:''}
            createdAt={review.created_at}
          />
        
      }):''}
    </div>
  )
}
export default ReviewList