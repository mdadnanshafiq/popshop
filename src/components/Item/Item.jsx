const Item = ({ item }) => {
  return (
    <div>
      <div className="card w-[300px] h-[600px] bg-base-100 shadow-xl">
        <div className="p-6 size-72">
          <img src={item.image} alt="" className="rounded-xl size-full" />
        </div>
        <div className="card-body items-start text-left">
          <p className="text-gray-500 text-sm">#{item.category}</p>
          <h2 className="card-title font-bold">{item.title.slice(0, 15)}</h2>
          <p className="text-pretty">{item.description.slice(0, 70)}</p>
          <p className="font-bold text-xl">$ {item.price}</p>
          <div className="card-actions w-full">
            <button className="btn btn-primary w-full">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
