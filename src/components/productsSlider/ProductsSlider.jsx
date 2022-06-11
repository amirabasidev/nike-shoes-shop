import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowLeft3, ArrowRight3 } from "iconsax-react";

import useFetch from "../../hooks/useFetch";

import Error from "../error/Error";
import Spinner from "../UI/spinner/Spinner";
import ProductsItem from "./productsItem/ProductsItem";

import classes from "./productsSlider.module.css";

const breakpoints = {
  1400: { slidesPerView: 6, spaceBetween: 20 },
  1200: { slidesPerView: 5, spaceBetween: 20 },
  992: { slidesPerView: 4, spaceBetween: 10 },
  768: { slidesPerView: 3, spaceBetween: 10 },
  576: { slidesPerView: 2, spaceBetween: 10 },
  0: { slidesPerView: 1, spaceBetween: 10 },
};

const ProductsSlider = ({ title, url }) => {
  const {
    data: products,
    loading,
    error,
    fetchData: getProducts,
  } = useFetch([], url);

  return (
    <section className={classes.products__slider}>
      <h3 className={classes.product__slider_title}>
        {title}
      </h3>
      {loading ? (
        <Spinner minHeight="220px" />
      ) : error === null ? (
        <>
          <Swiper
            speed={300}
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: `.${classes.products__slider_next}`,
              prevEl: `.${classes.products__slider_prev}`,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={breakpoints}
            className={classes.products__slider_swiper}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductsItem product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={`icon ${classes.products__slider_prev}`}>
            <ArrowLeft3 color="100%" />
          </div>
          <div className={`icon ${classes.products__slider_next}`}>
            <ArrowRight3 size="100%" />
          </div>
        </>
      ) : (
        <Error error={String(error)} retry={getProducts} />
      )}
    </section>
  );
};

export default ProductsSlider;
