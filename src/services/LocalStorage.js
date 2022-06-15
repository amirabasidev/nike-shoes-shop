export const getItems = (itemName) => {
  const items = localStorage.getItem(itemName);

  return items ? JSON.parse(items) : [];
};

export const addItem = (itemName, value) => {
  let item = JSON.parse(localStorage.getItem(itemName));

  if (item) {
    item.push(value);
    localStorage.setItem(itemName, JSON.stringify(item));
  } else {
    item = [value];
    localStorage.setItem(itemName, JSON.stringify(item));
  }

  return item;
};

export const editItem = (itemName, newItem, index) => {
  let item = JSON.parse(localStorage.getItem(itemName));
  item[index] = newItem;
  localStorage.setItem(itemName, JSON.stringify(item));

  return item;
};

export const deleteItem = (itemName, index) => {
  let item = JSON.parse(localStorage.getItem(itemName));
  item.splice(index, 1);
  localStorage.setItem(itemName, JSON.stringify(item));

  return item;
};
