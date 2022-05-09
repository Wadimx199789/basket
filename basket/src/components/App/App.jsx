import "./_reset.scss";
import "./_base.scss";
import "./_section-cart.scss"
import Title from "../Title/Title";
import Cart from "../Cart/Cart";

function App() {
  return (
    <section className="section-cart">
      <div className="container">
        <div className="section-cart__header">
          <Title />
        </div>
        <Cart />
        <div className="section-cart__body">
        </div>
      </div>
    </section>
  )
}
export default App;
