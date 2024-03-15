import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import Item from "./components/Item/Item";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="md:max-w-[1280px] mx-auto">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-primary p-6">PopShop</h1>
      </div>
      <div className="grid grid-cols-4 justify-center items-start gap-4">
        <div className="col-span-3 grid grid-cols-3 gap-4">
          {items.map((item, idx) => {
            return (
              <div key={idx}>
                <Item item={item}></Item>
              </div>
            );
          })}
        </div>
        <div className="col-span-1">
          <h1 className="text-xl font-bold text-primary">Cart</h1>
          <br />
          <div className="flex justify-between items-center">
            <p className="text-sm font-bold text-primary">Name</p>
            <p className="text-sm font-bold text-primary">Price</p>
          </div>
          <hr className="w-full" />
          <br />
          <hr className="w-full" />
          <h1 className="text-xl font-bold text-primary">Total Price: </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
