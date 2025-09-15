import Banner from "@/components/Banners/Banner";

import testimonials from "@/data/TestimonialData";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const TestimonialSection = () => {
  return (
    <section>
      <div className="banner w-full h-40 lg:h-[300px]">
        <Banner
          img={
            "https://img.freepik.com/premium-photo/woman-looking-up-with-red-background_1134-16021.jpg?uid=R154443936&ga=GA1.1.439080133.1743833973&semt=ais_hybrid&w=740"
          }
          heading={"Testimonials"}
        />
      </div>
      <div className=" max-w-[1200px] mx-auto py-2 my-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  p-1 m-1">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="min-w-full sm:min-w-1/2 lg:min-w-1/3 p-2 group"
            >
              <div className="bg-white  p-6 text-center border-4 transition duration-300 flex flex-col items-center gap-4">
                <Image
                  width={400}
                  height={400}
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-full group-hover:scale-120 duration-1000 object-cover border-2 border-gray-300"
                />
                <div className="flex items-center justify-center w-full px-4">
                  <h3
                    className="font-semibold text-gray-800 text-lg group-hover:scale-110 duration-1000"
                    style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.3)" }}
                  >
                    {item.name}
                  </h3>
                </div>
                <p className="text-sm text-gray-500">{item.username}</p>
                <div className="flex gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={
                        i < item.rating ? "text-yellow-400" : "text-gray-300"
                      }
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.review}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
