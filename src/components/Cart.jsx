import { useContext } from 'react';
import './Cart.css';
import { CartContext } from '../contexts/CartContext';

export default function Cart() {
  const { cart, removeFromCart, addToCart, clearCart } = useContext(CartContext);

  // Calcular el número total de productos en el carrito
  const totalItems = cart.reduce((total, product) => total + product.quantity, 0);

  return (
    <>
      <label className='cart-button' htmlFor='cart'>
        🛒 {totalItems > 0 && <span className='cart-count'>{totalItems}</span>}
      </label>
      <input id='cart' type='checkbox' hidden />

      <aside className='cart'>
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.description} />

              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>

              <footer>
                <small>Quantity: {product.quantity}</small>
                <button onClick={() => removeFromCart(product)}>-</button>
                <button onClick={() => addToCart(product)}>+</button>
              </footer>
            </li>
          ))}
        </ul>

        <button onClick={clearCart}>Clear cart</button>
      </aside>      
    </>
  );
}
