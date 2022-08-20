import { useState } from "react";
import { IProduct } from "../models";

interface ProductProps {
  product: IProduct;
}

export const Product = ({ product }: ProductProps) => {
  const [details, setDetails] = useState(false);
  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img className="w-1/6" src={product.image} alt={product.title} />
      <p>{product.title}</p>
      <p className="font-bold">{product.price}</p>
      <button
        className="py-2 px-4 border bg-yellow-400"
        onClick={() => setDetails((prev) => !prev)}
      >
        {details ? "Hide details" : "Show details"}
      </button>
      {details && (
        <div>
          <p>{product.description}</p>
        </div>
      )}
    </div>
  );
};
