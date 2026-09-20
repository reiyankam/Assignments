import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";

function Cart() {
  const { state, dispatch } = useCart();

  const subtotal = state.cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

    const discount = state.coupon
    ? (subtotal * state.coupon) / 100
    : 0;

    const discountedTotal = subtotal - discount;
    const gst = discountedTotal * 0.18;
    const grandTotal = discountedTotal + gst;

  const applyCoupon = () => {
    const code = prompt("Enter coupon code:");

    if (code && code.toUpperCase() === "SAVE10") {
      dispatch({
        type: "APPLY_COUPON",
        payload: 10,
      });
      alert("Coupon applied! You saved 10%.");
    } else if (code) {
      alert("Invalid coupon code.");
    }
  };

  return (
    <aside className="cart-panel">
      <div className="cart-heading">
        <div>
          <p className="section-label">YOUR ORDER</p>
          <h2>Shopping Cart</h2>
        </div>

        <span className="cart-count">
          {state.cart.reduce(
            (total, item) => total + item.quantity,
            0
          )}
        </span>
      </div>

      {state.cart.length === 0 ? (
        <div className="empty-cart">
          <div>🛒</div>
          <h3>Your cart is empty</h3>
          <p>Add some products to get started.</p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {state.cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="cart-summary">
            <div>
              <span>Subtotal</span>
              <strong>₹{subtotal.toLocaleString("en-IN")}</strong>
            </div>

            {discount > 0 && (
              <div className="discount-row">
                <span>Coupon Discount</span>
                <strong>
                -₹{discount.toLocaleString("en-IN", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                })}
                </strong>
              </div>
            )}

            <div>
              <span>GST (18%)</span>
              <strong>
            ₹{gst.toLocaleString("en-IN", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            })}
            </strong>
            </div>

            <div className="grand-total">
              <span>Grand Total</span>
              <strong>
            ₹{grandTotal.toLocaleString("en-IN", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            })}
            </strong>
            </div>
          </div>

          <button className="coupon-btn" onClick={applyCoupon}>
            🎟️ Apply Coupon
          </button>

          <div className="coupon-hint">
            Try coupon: <strong>SAVE10</strong>
          </div>
        </>
      )}
    </aside>
  );
}

export default Cart;