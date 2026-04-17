"use client";

import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Overlock Machine",
    price: 3800,
    image: "/images/IMG_4426_2.jpg",
    description:
      "High-speed overlock machine designed for clean edge finishing and strong, durable stitching.",
  },
  {
    id: 2,
    name: "Embroidery Machine",
    price: 5200,
    image: "/images/IMG_4426_3.jpg",
    description:
      "Advanced embroidery machine for precise designs and professional-quality stitching.",
  },
  {
    id: 3,
    name: "Umbrella Sewing Machine (Rounded Body)",
    price: 4500,
    image: "/images/IMG_4426_4.jpg",
    description:
      "Durable rounded body umbrella machine built for stability and efficient heavy-duty stitching.",
  },
  {
    id: 4,
    name: "Umbrella Sewing Machine (Square Body)",
    price: 4700,
    image: "/images/IMG_4426_5.jpg",
    description:
      "Strong square body umbrella machine designed for long-lasting industrial performance.",
  },
  {
    id: 5,
    name: "Sewing Machine (Rounded Body)",
    price: 3700,
    image: "/images/IMG_4426_6.jpg",
    description:
      "Compact and reliable rounded body sewing machine ideal for tailoring and daily use.",
  },
  {
    id: 6,
    name: "Sewing Machine (Square Body)",
    price: 3800,
    image: "/images/IMG_4426.jpg",
    description:
      "Heavy-duty square body sewing machine built for precision and long-term industrial use.",
  }
];

export default function ProductsPage() {
  return (
    <div className="px-10 py-16">

      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-12">
        Our Machines
      </h1>

      {/* Product Grid */}
      <div className="grid md:grid-cols-3 gap-10">
        {products.map((p) => (
          <div
            key={p.id}
            className="border rounded-2xl p-4 hover:shadow-xl transition"
          >

            {/* IMAGE FIXED */}
            <div className="w-full h-[250px] bg-gray-100 rounded-xl mb-4 flex items-center justify-center">
              <img
                src={p.image}
                alt={p.name}
                className="max-h-full max-w-full object-contain p-2"
              />
            </div>

            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="text-gray-500">₹{p.price}</p>
            <p className="text-sm text-gray-600 mt-2">{p.description}</p>

            {/* View Details */}
            <Link href={`/products/${p.id}`}>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-500 hover:scale-105 transition">
                View Details
              </button>
            </Link>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/919803700284?text=Hello,%20I%20want%20to%20buy%20${p.name}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-2 w-full bg-green-500 text-white py-2 rounded-xl hover:scale-105 transition">
                Order on WhatsApp
              </button>
            </a>
          </div>
        ))}
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919803700284?text=Hello%20I%20am%20interested%20in%20your%20machines"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
          width="30"
          alt="WhatsApp"
        />
      </a>

    </div>
  );
}