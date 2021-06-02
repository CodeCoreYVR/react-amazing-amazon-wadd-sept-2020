import { StarRating } from './StarRating'

const ReviewDetails=({ rating, body, createdAt, id, reviewerName, deleteReview })=> {
  return (
    <div>
      <h3 className='header'>
        <StarRating max={5} currentNumber={rating} />
      </h3>
      <p>body: {body}</p>
      <p>Reviewed by: {reviewerName}</p>
      <p>createdAt: {createdAt}</p>{' '}
    </div>
  )
}
export default ReviewDetails