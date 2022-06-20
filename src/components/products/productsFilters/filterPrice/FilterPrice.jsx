import { DollarCircle } from "iconsax-react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useCallback, useState, useRef } from "react";

import { filterPrice } from "../../../../redux/filters/filtersActions";
import debounce from "../../../../utils/debounce/debounce";

import Accordion from "../../../UI/accordion/Accordion";

import classes from "./filterPrice.module.css";

const FilterPrice = () => {
  const dispatch = useDispatch();

  const price = useSelector((state) => state.filters.price);
  const products = useSelector((state) => state.products.products);

  const inputMin__Ref = useRef(null);
  const inputMax__Ref = useRef(null);
  const progress__Ref = useRef(null);

  const [rangePrice, setRangePrice] = useState([0, 0]);
  const [gapPrice, setGapPrice] = useState(0);

  const sortProducts = () => {
    return products.sort((product1, product2) =>
      product1.price > product2.price
        ? 1
        : product2.price > product1.price
        ? -1
        : 0,
    );
  };

  const calculateRangePrice = (products) => {
    const rangePrice = [products[0].price, products[products.length - 1].price];
    setRangePrice(rangePrice);

    dispatch(filterPrice(rangePrice));
  };

  const calculatePriceGap = (products) => {
    const gap = products[1].price - products[0].price;
    setGapPrice(gap);
  };

  const productsFilterPrice = useCallback(
    debounce(() => {
      const newRenge = [
        +inputMin__Ref.current.value,
        +inputMax__Ref.current.value,
      ];

      dispatch(filterPrice(newRenge));
    }, 200),
    [],
  );

  const generateProgress = () => {
    const minPriceValue = parseInt(inputMin__Ref.current.value);
    const maxPriceValue = parseInt(inputMax__Ref.current.value);

    const minRange = rangePrice[0];
    const maxRange = rangePrice[1];

    const leftStyle =
      ((minPriceValue - minRange) / (maxRange - minRange)) * 100 + "%";

    const rightStyle =
      100 - ((maxPriceValue - minRange) / (maxRange - minRange)) * 100 + "%";

    progress__Ref.current.style.left = leftStyle;
    progress__Ref.current.style.right = rightStyle;
  };

  const onChangeHandler = () => {
    const minPriceValue = parseInt(inputMin__Ref.current.value);
    const maxPriceValue = parseInt(inputMax__Ref.current.value);

    const minRange = rangePrice[0];
    const maxRange = rangePrice[1];

    if (minPriceValue > maxRange - gapPrice) {
      inputMin__Ref.current.value = maxRange - gapPrice;
    } else if (maxPriceValue - gapPrice <= minRange) {
      inputMax__Ref.current.value = minRange + gapPrice;
    }

    generateProgress();

    productsFilterPrice();
  };

  useEffect(() => {
    const productsSorted = sortProducts();
    calculateRangePrice(productsSorted);
    calculatePriceGap(productsSorted);
  }, [products]);

  return (
    <Accordion title="price" icon={DollarCircle}>
      <div className={classes.filter__price_details}>
        <h6 className={classes.filter__price_min}>{price[0]}</h6>
        <span> - </span>
        <h6 className={classes.filter__price_max}>{price[1]}</h6>
      </div>
      <div className={classes.filter__price}>
        <div className={classes.filter__price_slider}>
          <div
            className={classes.filter__price_progress}
            ref={progress__Ref}
          ></div>
        </div>
        <input
          ref={inputMin__Ref}
          id="minValue"
          type="range"
          onChange={onChangeHandler}
          min={rangePrice[0]}
          max={rangePrice[1]}
          defaultValue={rangePrice[0]}
        />
        <input
          ref={inputMax__Ref}
          id="maxValue"
          type="range"
          onChange={onChangeHandler}
          min={rangePrice[0]}
          max={rangePrice[1]}
          defaultValue={rangePrice[1]}
        />
      </div>
    </Accordion>
  );
};

export default FilterPrice;
