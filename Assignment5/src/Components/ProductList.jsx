import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 1499,
    icon: "🎧",
    category: "Audio",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 2299,
    icon: "⌚",
    category: "Wearables",
  },
  {
    id: 3,
    name: "Laptop Backpack",
    price: 999,
    icon: "🎒",
    category: "Bags",
  },
  {
    id: 4,
    name: "Running Sneakers",
    price: 1899,
    icon: "👟",
    category: "Footwear",
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    price: 1299,
    icon: "🔊",
    category: "Audio",
  },
  {
    id: 6,
    name: "Mechanical Keyboard",
    price: 2499,
    icon: "⌨️",
    category: "Accessories",
  },
  {
    id: 7,
    name: "USB-C Hub",
    price: 899,
    icon: "🔌",
    category: "Accessories",
  },
  {
    id: 8,
    name: "Laptop Stand",
    price: 1199,
    icon: "💻",
    category: "Accessories",
  },
];

function ProductList() {
  return (
    <section className="products-section">
      <div className="section-heading">
        <div>
          <p className="section-label">OUR COLLECTION</p>
          <h2>Popular Products</h2>
        </div>

        <span className="product-count">{products.length} products</span>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;