import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";

function CheckoutProduct({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
  hasPrime,
}) {
  return (
    <div className="grid grid-cols-5">
      <Image src={image} width={100} height={300} objectFit="contain" />

      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
