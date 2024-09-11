import { createContext, useState } from 'react';


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      return setCart(updatedCart);
    }

    return setCart([...cart, { ...product, quantity: 1 }]);
  }

  const removeFromCart = (product) => {
    console.log("Eliminar producto:", product);
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);
    console.log("Índice del producto existente:", existingProductIndex);

    if (existingProductIndex !== -1) {
        const updatedCart = [...cart];
        if (updatedCart[existingProductIndex].quantity > 1) {
            updatedCart[existingProductIndex].quantity -= 1;
        } else {
            updatedCart.splice(existingProductIndex, 1);
        }
        console.log("Carrito actualizado:", updatedCart);
        return setCart(updatedCart);
    }
};
  
  const clearCart = () => {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{ cart, removeFromCart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
