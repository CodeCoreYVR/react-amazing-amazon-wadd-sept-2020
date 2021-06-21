import { StarRating } from "./StarRating";
import { ProductShowContext } from "./ProductShowPage";
import { useContext } from "react";

const ReviewDetails = (props) => {
  const deleteReview = useContext(ProductShowContext);

  return (
    <div>
      <h3 className="header">
        <StarRating max={5} currentNumber={props.rating} />
      </h3>
      <p>{props.body}</p>
      <p>Reviewed by: {props.reviewer ? props.reviewer : null}</p>
      <p>createdAt: {props.createdAt}</p>{" "}
      <button onClick={() => deleteReview(props.id)}>Delete</button>
    </div>
  );
};
export default ReviewDetails;
