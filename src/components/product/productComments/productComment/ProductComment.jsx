import { ArrowForward } from "iconsax-react";

import ProductCommentForm from "../productCommentForm/ProductCommentForm";

import classes from "./comment.module.css";

const ProductComment = ({
  comment,
  replies,
  isReplay,
  setIsReplay,
  getComments,
}) => {
  
  const parentId = comment.parentId !== null ? comment.parentId : comment.id;
  
  const replayComment = () => setIsReplay(comment.id);

  return (
    <div className={classes.product__comment}>
      <h6 className={classes.product__comment_name}>{comment.name}</h6>
      <p className={classes.product__comment_text}>{comment.text}</p>
      <button
        onClick={replayComment}
        className={`btn-icon btn-success ${classes.product__comment_replay}`}
      >
        <span className="icon">
          <ArrowForward size="100%" />
        </span>
        Replay
      </button>
      {isReplay === comment.id && (
        <ProductCommentForm
          setIsReplay={setIsReplay}
          parentId={parentId}
          getComments={getComments}
        />
      )}
      {replies.length > 0 && (
        <div className={classes.product__comment_replies}>
          {replies.map((comment) => (
            <ProductComment
              key={comment.id}
              comment={comment}
              replies={[]}
              isReplay={isReplay}
              setIsReplay={setIsReplay}
              getComments={getComments}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductComment;
