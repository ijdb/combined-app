import React, { useRef, useState, useEffect } from "react";
import "./feedback.css";
import FeedComment from "./FeedComment";
import LearningBtn from "../components/LearningBtn";
import Learnings from "../components/Learnings";
import feedlearning from "./feedlearning";

function Feedback() {
  const taRef = useRef(null);
  const [mode, setMode] = useState("add");
  const [idOfCommentBeingUpdated, setIdOfCommentBeingUpdated] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [rating, setRating] = useState(null);
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    taRef.current.focus();
  }, []);

  const handleInputChange = (e) => {
    setNewComment(e.target.value);
  };
  const handleRatingClick = (rating) => {
    setRating(rating);
  };
  const handleAddComment = () => {
    if (newComment !== "" && rating !== null) {
      const comment = {
        id: new Date().getTime(),
        rating: rating,
        comment: newComment,
      };
      setComments([...comments, comment]);
      setNewComment("");
      setRating(null);
    }
    taRef.current.focus();
  };
  const initializeUpdateMode = (id) => {
    // Definition of Edit Mode: state value of mode should be not equal to "Add"
    // It should actually be equal to id of the comment on which the click action happened
    // It should also fill textarea with value of old comment
    // it should focus on text area
    // button should update from "Add comment" to "Update Comment"
    setMode("edit");
    setIdOfCommentBeingUpdated(id);
    const commentToUpdate = comments.find((x) => x.id === id).comment;
    setNewComment(commentToUpdate);
    taRef.current.focus();
  };
  const handleCommentUpdate = () => {
    let commentToUpdate = comments.find(
      (x) => x.id === idOfCommentBeingUpdated
    );
    commentToUpdate.comment = newComment;
    setComments(comments);
    setNewComment("");
    setRating(null);
    setMode("add");
    setIdOfCommentBeingUpdated(null);
  };

  const handleDeleteComment = (id) => {
    const updatedComments = comments.filter((comment) => comment.id !== id);
    setComments(updatedComments);
  };
  const ratingBtns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
    <button key={item} onClick={() => handleRatingClick(item)}>
      {item}
    </button>
  ));
  return (
    <div className="feedback-container">
      <LearningBtn handleClick={() => setShowBtn(!showBtn)} />
      {showBtn && <Learnings learnData={feedlearning} />}
      <div className="feed-title">Feedback App</div>
      <div className="feed-form">
        <textarea
          ref={taRef}
          placeholder="Enter your comment..."
          value={newComment}
          onChange={handleInputChange}
        ></textarea>
        <div className="rating-btn">{ratingBtns}</div>
        {mode === "add" && (
          <button onClick={handleAddComment}>Add Comment</button>
        )}
        {mode !== "add" && (
          <button onClick={handleCommentUpdate}>Update Comment</button>
        )}
      </div>
      <div className="feed-comment-list">
        {comments.map((comment) => (
          <FeedComment
            comment={comment}
            key={comment.id}
            handleDelete={() => handleDeleteComment(comment.id)}
            handleUpdate={() => initializeUpdateMode(comment.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Feedback;
