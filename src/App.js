import Card from "./components/card/Card";
import Header from "./components/header/Header";
import { categories, products } from "./data";
import "./App.scss";

function App() {
  return (
    <div>
      <h1 className="text-center mt-3">
        <Header categories={categories} text={"Products List"} />
        <Card products={products} />
      </h1>
    </div>
  );
}

export default App;
