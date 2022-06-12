import { useSelector } from "react-redux";

import useFetch from "../../../hooks/useFetch";
import Error from "../../error/Error";

import Spinner from "../../UI/spinner/Spinner";
import ProductCommentsForm from "./productCommentForm/ProductCommentForm";

import classes from "./productComments.module.css";

const productComments = () => {
  const { id } = useSelector((state) => state.product.product);
  const url = `https://amirabasinasab.ir/nike/index.php/comments?productId=${id}`;

  const {
    data: comments,
    error,
    loading,
    fetchData: getComments,
  } = useFetch([], url);

  return (
    <section className={classes.product__comments}>
      {loading ? (
        <Spinner minHeight="200px" />
      ) : error !== null ? (
        <Error error={error} retry={getComments} />
      ) : (
        <>
          <ProductCommentsForm getComments={getComments} />
          <div className={classes.product__comments_items}>Comments</div>
        </>
      )}
    </section>
  );
};

export default productComments;
