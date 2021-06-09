import { StarRating } from './StarRating'

function ReviewDetails(props = {}) {
  const { reviewer = {}, onDeleteClick = () => {} } = props;  return (
    <div>
      <h3 className='header'>
        <StarRating max={5} currentNumber={props.rating} />
      </h3>
      <p>{props.body}</p>
      <p>Reviewed by: {props.reviewerName}</p>
      <p>createdAt: {props.createdAt}</p>{' '}
      <button onClick={onDeleteClick(props.id)}>Delete</button>

    </div>
  )
}
export default ReviewDetails