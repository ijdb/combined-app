import React from "react";
import { RiDeleteBin6Line, RiEdit2Fill } from "react-icons/ri";

function FeedComment({ comment, handleDelete, handleUpdate }) {
  return (
    <div className="feed-single-comment">
      <button className="com-rating">{comment.rating}</button>
      <div>{comment.comment}</div>
      <div className="com-update" onClick={handleUpdate}>
        <RiEdit2Fill />
      </div>
      <div className="feed-delete" onClick={handleDelete}>
        <RiDeleteBin6Line />
      </div>
    </div>
  );
}

export default FeedComment;
