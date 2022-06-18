function debounce(func, time) {
  let timer;

  return (...agrs) => {
    const context = this;

    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      timer = null;
      func.apply(context, agrs);
    }, time);
  };
}

export default debounce;
