"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
};

const productsData: Product[] = [
  {
    id: 1,
    name: "Spako Industrial Sewing Machine",
    price: 3800,
    category: "Sewing Machines",
    image: "/images/IMG_4426.jpg",
    description:
      "Built for durability, precision stitching, and long-lasting industrial performance.",
  },
  {
    id: 2,
    name: "Spako Overlock Machine",
    price: 3800,
    category: "Overlock Machines",
    image: "/images/IMG_4426_2.jpg",
    description:
      "High-speed overlock machine designed for clean finishing and efficient production.",
  },
  {
    id: 3,
    name: "Spako Umbrella Machine",
    price: 4700,
    category: "Umbrella Machines",
    image: "/images/IMG_4426_5.jpg",
    description:
      "Strong square body umbrella machine designed for long-lasting industrial performance.",
  },
];

export default function Home() {
  const [cart, setCart] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product: Product) => {
    setCart((prev: Product[]) => [...prev, product]);
  };

  const removeFromCart = (index: number) => {
    setCart((prev: Product[]) => prev.filter((_, i: number) => i !== index));
  };

  return (
    <div className="font-sans bg-white text-black">

      {/* NAVBAR */}
      <nav className="relative flex items-center justify-center p-6 sticky top-0 bg-white shadow z-50">
        <h1 className="text-2xl font-bold">S.K. Industries</h1>

        <div className="absolute right-6 flex items-center space-x-6">
          <Link href="#">Home</Link>
          <Link href="#products">Products</Link>
          <Link href="#about">About</Link>
          <Link href="#contact">Contact</Link>

          {/* CART */}
          <div className="relative">
            <button onClick={() => setShowCart(!showCart)}>
              🛒 ({cart.length})
            </button>

            {showCart && (
              <div className="absolute right-0 mt-2 w-[260px] bg-white border rounded-xl shadow-lg p-4">
                <h2 className="font-bold mb-2">Cart</h2>

                {cart.length === 0 ? (
                  <p className="text-gray-500 text-sm">No items</p>
                ) : (
                  cart.map((item: Product, index: number) => (
                    <div key={index} className="mb-3 border-b pb-2">

                      <a
                        href={`https://wa.me/919814180664?text=Hello,%20I%20want%20to%20buy%20${item.name}%20from%20S.K.%20Industries`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-blue-600 hover:underline"
                      >
                        {item.name}
                      </a>

                      <p className="text-xs text-gray-500">₹{item.price}</p>

                      <button
                        onClick={() => removeFromCart(index)}
                        className="text-red-500 text-xs mt-1"
                      >
                        Remove
                      </button>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="text-center py-20 px-6 overflow-hidden">
        <h2 className="text-5xl font-bold mb-4">
          Precision Engineering for Professional Tailoring
        </h2>

        <p className="text-lg mb-6 text-gray-600">
          Manufacturing high-quality sewing, overlock, and industrial machines since 1990.
        </p>

        <Link href="/products">
          <button className="bg-black text-white px-6 py-3 rounded-xl hover:scale-105 transition">
            Explore Products
          </button>
        </Link>

        {/* AUTO SCROLL */}
        <div className="mt-16 w-full overflow-hidden">
          <div className="flex animate-scroll">
            {[...[
              "/images/IMG_4426.jpg",
              "/images/IMG_4426_2.jpg",
              "/images/IMG_4426_3.jpg"
            ], ...[
              "/images/IMG_4426_4.jpg",
              "/images/IMG_4426_5.jpg",
              "/images/IMG_4426_6.jpg"
            ]].map((img, i) => (
              <div key={i} className="flex-shrink-0 px-3">
                <Image
                  src={img}
                  alt="machine"
                  width={320}
                  height={220}
                  className="h-[220px] w-[320px] object-contain bg-gray-100 p-2 rounded-2xl shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="px-6 py-16">
        <h3 className="text-3xl font-semibold mb-10 text-center">
          Our Top Selling Machines
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {productsData.map((product) => (
            <div key={product.id} className="border rounded-2xl p-4 hover:shadow-xl transition">
              
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={250}
                className="w-full h-[250px] object-contain bg-gray-100 p-2 rounded-xl mb-4"
              />

              <h4 className="text-xl font-semibold">{product.name}</h4>
              <p className="text-gray-600">₹{product.price}</p>
              <p className="text-sm mt-2">{product.description}</p>

              <button
                onClick={() => addToCart(product)}
                className="mt-4 w-full bg-black text-white py-2 rounded-xl hover:scale-105 transition"
              >
                Add to Cart
              </button>

              <button
                onClick={() =>
                  window.open(
                    `https://wa.me/919814180664?text=Hello,%20I%20want%20to%20buy%20${product.name}`,
                    "_blank"
                  )
                }
                className="mt-2 w-full bg-green-500 text-white py-2 rounded-xl"
              >
                Buy on WhatsApp
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 bg-black text-white text-center">
        <h3 className="text-4xl font-bold mb-6">About S.K. Industries</h3>

        <p className="max-w-3xl mx-auto text-gray-300 text-lg">
          S.K. Industries has been manufacturing industrial machines since 1990.
          Trusted by professionals across India for quality, durability, and precision.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 bg-gray-100 text-center">
        <h3 className="text-4xl font-bold mb-6">Contact Us</h3>

        <p>📍 Ludhiana, Punjab</p>
        <p>📞 +91-9803700284</p>

        <a
          href="https://wa.me/919814180664"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="mt-6 bg-green-500 text-white px-6 py-3 rounded-xl">
            Chat on WhatsApp
          </button>
        </a>
      </section>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/919814180664?text=Hello%20I%20am%20interested%20in%20your%20machines"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg"
      >
        <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" width="30" />
      </a>

      {/* FOOTER */}
      <footer className="bg-black text-white text-center py-6">
        <p>© 2026 S.K. Industries</p>
      </footer>

      {/* ANIMATION */}
      <style jsx>{`
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 20s linear infinite;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}