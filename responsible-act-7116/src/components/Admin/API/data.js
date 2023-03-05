export const getAllProducts = () => {
    return fetch(" https://apiserver-no4z.onrender.com/allproduct").then((res) => res.json());
  };
  
  export const getProducts = () => {
    return fetch("https://apiserver-no4z.onrender.com/dresses").then((res) => res.json());
  };
  
  export const getClothing = () => {
    return fetch("https://apiserver-no4z.onrender.com/clothing").then((res) => res.json());
  };
  
  export const getShoes = () => {
    return fetch("https://apiserver-no4z.onrender.com/shoes").then((res) => res.json());
  };
  
  export const getCart = () => {
    return fetch(" https://apiserver-no4z.onrender.com/cart").then((res) => res.json());
  };