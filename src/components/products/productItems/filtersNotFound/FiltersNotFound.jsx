import { FilterRemove } from 'iconsax-react';

import classes from './filtersNotFound.module.css';

const FiltersNotFound = () => {
  return (
    <section className={classes.filters_not_found}>
        <span className={`icon ${classes.filters_not_found_icon}`}>
            <FilterRemove size="100%"/>
        </span>
        <p className={classes.filters_not_found_text}>Products Not Found !</p>
    </section>
  )
}

export default FiltersNotFound;