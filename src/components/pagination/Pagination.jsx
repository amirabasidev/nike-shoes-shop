import { useEffect } from "react";

import classes from "./pagination.module.css";

const Pagination = ({
  totalItem,
  range,
  currentPage,
  start,
  middle,
  end,
  onChangePage,
}) => {
  const countPage = Math.ceil(totalItem / range);
  const page = currentPage / range;

  let rengePages = [...Array(countPage).keys()].map((x) => x + 1);

  const changeRangePage = () => {
    if (start + end + middle <= countPage) {
      let startRange = rengePages.slice(0, start);
      let middleRnge = [...rengePages.slice(start, start + middle), "..."];
      let endRange = rengePages.slice(countPage - end, countPage);

      const pageIndex = page - 1;
      const middleAvrage = Math.ceil(middle / 2);

      if (pageIndex - middleAvrage > startRange[startRange.length - 1]) {
        if (pageIndex + middleAvrage < endRange[0] - 1) {
          const newMiddleRnge = rengePages.slice(
            pageIndex - middle + middleAvrage,
            pageIndex + middleAvrage,
          );

          middleRnge = ["...", ...newMiddleRnge, "..."];
        } else {
          const newMiddleRnge = rengePages.slice(
            endRange[0] - middle - 1,
            endRange[0] - 1,
          );

          middleRnge = ["...", ...newMiddleRnge];
        }
      }

      rengePages = [...startRange, ...middleRnge, ...endRange];
    }
  };

  const prevPage = () => onChangePage(page - 1);

  const nextPage = () => onChangePage(page + 1);

  useEffect(() => {
    changeRangePage();
  }, [page]);

  return (
    <ul className={classes.pagination}>
      {page !== 1 && (
        <li className={classes.pagination__item} onClick={prevPage}>
          Prev
        </li>
      )}

      {rengePages.map((num) => {
        const className =
          num === page
            ? classes.pagination__item_active
            : classes.pagination__item;

        if (num === "...") {
          return <li key={num}>{num}</li>;
        } else {
          return (
            <li
              key={num}
              className={className}
              onClick={() => onChangePage(num)}
            >
              {num}
            </li>
          );
        }
      })}

      {page !== countPage && countPage !== 0 && (
        <li className={classes.pagination__item} onClick={nextPage}>
          Next
        </li>
      )}
    </ul>
  );
};

export default Pagination;
