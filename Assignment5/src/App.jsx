import { CartProvider } from "./context/CartContext";
import Header from "./Components/Header";
import ProductList from "./Components/ProductList";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <div className="app">
        <Header />

        <main>
          <section className="hero">
            <div>
              <p className="eyebrow">SMART SHOPPING</p>
              <h1>Everything you need, all in one cart.</h1>
              <p className="hero-text">
                Explore our products, add your favourites to the cart,
                and manage your order easily.
              </p>
            </div>

            <div className="hero-badge">
              <span>🛍️</span>
              <strong>Shop Easy</strong>
              <small>Save more on every order</small>
            </div>
          </section>

          <section className="shop-section">
            <ProductList />
            <Cart />
          </section>
        </main>

        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;