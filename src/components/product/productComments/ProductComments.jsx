import { useState } from "react";
import { useSelector } from "react-redux";

import useFetch from "../../../hooks/useFetch";
import Error from "../../error/Error";

import Spinner from "../../UI/spinner/Spinner";
import ProductCommentsForm from "./productCommentForm/ProductCommentForm";
import ProductComment from "./productComment/ProductComment";

import classes from "./productComments.module.css";
import ProductCommentsEmpty from "./productCommentsEmpty/ProductCommentsEmpty";

const productComments = () => {
  const { id } = useSelector((state) => state.product.product);
  const url = `https://amirabasinasab.ir/nike/index.php/comments?productId=${id}`;

  const {
    data: comments,
    error,
    loading,
    fetchData: getComments,
  } = useFetch([], url);

  const [isReplay, setIsReplay] = useState(null);

  const commentNotParent = comments.filter(
    (comment) => comment.parentId === null,
  );

  const getReplies = (commentId) => {
    return comments.filter((comment) => comment.parentId == commentId);
  };

  return (
    <section className={classes.product__comments}>
      {loading ? (
        <Spinner minHeight="200px" />
      ) : error !== null ? (
        <Error error={error} retry={getComments} />
      ) : (
        <>
          <ProductCommentsForm getComments={getComments} />
          {comments.length > 0 ? (
            <div className={classes.product__comments_items}>
              <h3 className={classes.product__comments_count}>
                Count Comments : {commentNotParent.length}
              </h3>
              {commentNotParent.map((comment) => (
                <ProductComment
                  key={comment.id}
                  comment={comment}
                  replies={getReplies(comment.id)}
                  isReplay={isReplay}
                  setIsReplay={setIsReplay}
                  getComments={getComments}
                />
              ))}
            </div>
          ) : (
            <ProductCommentsEmpty />
          )}
        </>
      )}
    </section>
  );
};

export default productComments;
