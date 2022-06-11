import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper";
import { ArrowSquareLeft, ArrowSquareRight } from "iconsax-react";

import classes from "./productImages.module.css";

const ProductImages = () => {
  const [activeImagesColor, setActiveImagesColor] = useState(null);

  const { images } = useSelector((state) => state.product.product);

  const imagesList = Object.keys(images);

  useEffect(() => {
    setActiveImagesColor(imagesList[0]);
  }, []);

  return (
    <section className={classes.product__images}>
      <div className={classes.product__images_groups}>
        {imagesList.map((item, index) => {
          const activeClass =
            item == activeImagesColor
              ? classes.product__images_group_active
              : classes.product__images_group;

          return (
            <img
              key={index}
              className={activeClass}
              onClick={() => setActiveImagesColor(item)}
              src={images[item][0]}
              alt={`product image ${item}`}
            />
          );
        })}
      </div>
      <div className={classes.product__images_slider}>
        <button className={`icon ${classes.product__images_slider_prev}`}>
          <ArrowSquareLeft size="100%" />
        </button>
        <button className={`icon ${classes.product__images_slider_next}`}>
          <ArrowSquareRight size="100%" />
        </button>
        <Swiper
          slidesPerView={1}
          effect={"fade"}
          modules={[EffectFade, Navigation]}
          navigation={{
            nextEl: `.${classes.product__images_slider_next}`,
            prevEl: `.${classes.product__images_slider_prev}`,
          }}
          className={classes.product__images_slider_swiper}
        >
          {activeImagesColor !== null &&
            images[activeImagesColor].map((item, index) => (
              <SwiperSlide key={index}>
                <img
                  className={classes.product__images_slider_image}
                  src={item}
                  alt={`product image ${index + 1}`}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProductImages;
