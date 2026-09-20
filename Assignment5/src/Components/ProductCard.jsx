import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  return (
    <article className="product-card">
      <div className="product-icon">{product.icon}</div>

      <span className="product-category">{product.category}</span>

      <h3>{product.name}</h3>

      <div className="product-bottom">
        <strong>₹{product.price.toLocaleString("en-IN")}</strong>

        <button onClick={addToCart}>
          + Add
        </button>
      </div>
    </article>
  );
}

export default ProductCard;