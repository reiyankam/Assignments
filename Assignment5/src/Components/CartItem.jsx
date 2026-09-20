import { useCart } from "../context/CartContext";

function CartItem({ item }) {
  const { dispatch } = useCart();

  const updateQuantity = (quantity) => {
    if (quantity < 1) return;

    dispatch({
      type: "UPDATE_QUANTITY",
      payload: {
        id: item.id,
        quantity,
      },
    });
  };

  const removeItem = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: item.id,
    });
  };

  return (
    <div className="cart-item">
      <div className="cart-item-icon">{item.icon}</div>

      <div className="cart-item-info">
        <h4>{item.name}</h4>
        <p>₹{item.price.toLocaleString("en-IN")} each</p>
      </div>

      <div className="quantity-control">
        <button onClick={() => updateQuantity(item.quantity - 1)}>
          −
        </button>

        <span>{item.quantity}</span>

        <button onClick={() => updateQuantity(item.quantity + 1)}>
          +
        </button>
      </div>

      <strong className="item-total">
        ₹{(item.price * item.quantity).toLocaleString("en-IN")}
      </strong>

      <button className="remove-item-btn" onClick={removeItem}>
        Remove
      </button>
    </div>
  );
}

export default CartItem;