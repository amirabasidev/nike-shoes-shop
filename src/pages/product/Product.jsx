import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getProduct } from "../../redux/products/productActions";

import Error from "../../components/error/Error";
import Spinner from "../../components/UI/spinner/Spinner";
import ProductBreadcrumb from "../../components/product/productBreadcrumb/ProductBreadcrumb";
import ProductImages from "../../components/product/productImages/ProductImages";
import ProductDetails from "../../components/product/productDetails/ProductDetails";
import Tabs from "../../components/UI/tabs/Tabs";
import Tab from "../../components/UI/tabs/tab/Tab";
import ProductAbout from "../../components/product/productAbout/ProductAbout";

import classes from "./product.module.css";
import { DocumentText } from "iconsax-react";

const Product = () => {
  const { name } = useParams();
  const dispatch = useDispatch();

  const { product, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProduct(name));
  }, []);

  return (
    <section className={classes.product}>
      {loading ? (
        <Spinner minHeight="88vh" />
      ) : error !== null ? (
        <Error error={error} retry={() => dispatch(getProduct(name))} />
      ) : (
        product !== null && (
          <>
            <ProductBreadcrumb />
            <section className={classes.product__content}>
              <ProductImages />
              <ProductDetails />
            </section>
            <Tabs>
              <Tab title="about" icon={<DocumentText size="100%" />}>
                <ProductAbout />
              </Tab>
            </Tabs>
          </>
        )
      )}
    </section>
  );
};

export default Product;
