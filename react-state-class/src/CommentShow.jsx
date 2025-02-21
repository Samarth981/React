import { useState } from 'react';
import CommentForm from './CommentForm';

import './CommentShow.css';

export default function CommentShow() {
  let [comments, setComments] = useState([
    { username: '@sk', comment: 'kjnd', rating: 4 },
  ]); //create arr of comment obj

  // this function use as a prop
  let addComment = (comment) => {
    setComments((currComment) => [...currComment, comment]);
  };
  return (
    <>
      <h2>all comment</h2>
      {comments.map((comment, idx) => {
        return (
          <div className="comment" key={idx}>
            <span>{comment.username}</span>
            &nbsp;
            <span>{comment.comment}</span>
            &nbsp;
            <span>{comment.rating}</span>
          </div>
        );
      })}

      <CommentForm addComment={addComment} />
    </>
  );
}
