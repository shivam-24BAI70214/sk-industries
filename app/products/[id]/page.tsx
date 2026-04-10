"use client";

import { useParams } from "next/navigation";

const products = [
  {
    id: 1,
    name: "Overlock Machine",
    price: 3800,
    image: "/images/IMG_4426 2.jpg",
    description:
      "High-speed overlock machine designed for clean edge finishing, strong stitching, and continuous industrial use.",
  },
  {
    id: 2,
    name: "Embroidery Machine",
    price: 5200,
    image: "/images/IMG_4426 3.jpg",
    description:
      "Advanced embroidery machine for precision designs, smooth operation, and professional-quality stitching output.",
  },
  {
    id: 3,
    name: "Umbrella Sewing Machine (Rounded Body)",
    price: 4500,
    image: "/images/IMG_4426 4.jpg",
    description:
      "Durable umbrella sewing machine with rounded body design, ensuring stability and efficient heavy-duty stitching.",
  },
  {
    id: 4,
    name: "Umbrella Sewing Machine (Square Body)",
    price: 4700,
    image: "/images/IMG_4426 5.jpg",
    description:
      "Robust square body umbrella machine built for industrial use, offering enhanced strength and consistent stitching quality.",
  },
  {
    id: 5,
    name: "Sewing Machine (Rounded Body)",
    price: 3700,
    image: "/images/IMG_4426 6.jpg",
    description:
      "Compact and durable rounded body sewing machine ideal for tailoring shops, providing smooth and reliable performance.",
  },
  {
    id: 6,
    name: "Sewing Machine (Square Body)",
    price: 3800,
    image: "/images/IMG_4426.jpg",
    description:
      "Heavy-duty square body sewing machine engineered for precision, long life, and consistent industrial stitching.",
  },
];

export default function ProductDetail() {
  const params = useParams();
  const product = products.find((p) => p.id === Number(params.id));

  if (!product) {
    return (
      <div className="p-10 text-white bg-black min-h-screen">
        Product not found
      </div>
    );
  }

  return (
    <div className="px-10 py-16 max-w-4xl mx-auto bg-black text-white min-h-screen">

      {/* Product Image */}
      <div className="w-full h-[400px] bg-gray-900 rounded-2xl mb-8 flex items-center justify-center">
        <img
          src={product.image}
          className="max-h-full max-w-full object-contain p-4"
        />
      </div>

      {/* Name */}
      <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

      {/* Price */}
      <p className="text-2xl text-gray-300 mb-4">₹{product.price}</p>

      {/* Description */}
      <p className="text-gray-300 mb-8 text-lg">
        {product.description}
      </p>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/919814180664?text=Hello,%20I%20want%20to%20buy%20${product.name}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="bg-green-500 text-white px-6 py-3 rounded-xl hover:scale-105 transition">
          Order on WhatsApp
        </button>
      </a>
    </div>
  );
}