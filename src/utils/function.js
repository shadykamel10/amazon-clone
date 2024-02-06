export const textSlice = (text) => {
  if (text.length > 40) {
    return text.slice(0, 10) + "...";
  } else {
    return text;
  }
};


export const addItemToShoppingCart = (product,cartItem) => {

  const item = cartItem.find((item) => item.id === product.id);
  if (item) {
    return cartItem.map((item) =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...cartItem, { ...product, quantity: 1 }];  
}