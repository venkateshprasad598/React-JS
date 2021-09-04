export const initialState = {
  myProduct: [],
};

export const reducer = (state, action) => {
  //   console.log(action);
  switch (action.type) {
    case "PRODUCT":
      const productDetails = [action.items];
      return { ...state, myProduct: productDetails };
  }
  return state;
};
