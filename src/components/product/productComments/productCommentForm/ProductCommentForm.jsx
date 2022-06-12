import { useState } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { MessageAdd, MessageRemove } from "iconsax-react";

import formValidComment from "../../../../utils/formValidate/formValidComment";

import classes from "./productCommentForm.module.css";

const ProductCommentForm = ({ getComments, parentId, setIsReplay }) => {
  const { id: productId } = useSelector((state) => state.product.product);

  const cancelReplay = () => setIsReplay(null);

  const [isDisabled, setIsDisabled] = useState(false);

  const [values, setValues] = useState({
    name: "",
    email: "",
    text: "",
    userName: "guest",
    userId: null,
    productId,
    parentId,
    createdAt: new Date(),
  });

  const onChangeHanlder = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.id]: e.target.value,
    }));
  };

  const createComment = async () => {
    setIsDisabled(true);
    try {
      const response = await fetch(
        `https://amirabasinasab.ir/nike/index.php/comments`,
        {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-type": "Application/json",
          },
        },
      );
      if (response.ok) {
        toast.success("Create Commnet Successfully !");
        getComments();
        setIsReplay(null);
      }
    } catch (error) {
      toast.error(error);
    } finally {
      setIsDisabled(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (formValidComment(values)) {
      createComment();
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label htmlFor="name">Name</label>
        <input id="name" onChange={onChangeHanlder} type="text" />
      </div>
      <div className="form-control">
        <label htmlFor="email">Email</label>
        <input id="email" onChange={onChangeHanlder} type="text" />
      </div>
      <div className="form-control">
        <label htmlFor="text">Text</label>
        <textarea
          id="text"
          onChange={onChangeHanlder}
          value={values.text}
        ></textarea>
      </div>
      <div className={classes.product__comments_actions}>
        {setIsReplay && (
          <button
            className={`btn-icon btn-danger ${classes.product__comments_cancel}`}
            disabled={isDisabled}
            onClick={cancelReplay}
          >
            <span className="icon">
              <MessageRemove size="100%" />
            </span>
            Cancel
          </button>
        )}
        <button
          className={`btn-icon btn-primary ${classes.product__comments_add_comment}`}
          disabled={isDisabled}
        >
          <span className="icon">
            <MessageAdd size="100%" />
          </span>
          Add Comment
        </button>
      </div>
    </form>
  );
};

export default ProductCommentForm;
