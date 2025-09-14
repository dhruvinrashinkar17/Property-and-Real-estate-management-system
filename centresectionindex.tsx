import Link from "next/link";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const CenterSection = () => {
  return (
    <div>
      <div className="max-w-[1200px] mx-auhref  py-2 border-t pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-5 md:gap-3 ">
          <div className="dombivali px-2">
            <div className="heading ">
              <h1 className="text-xl mb-4  flex flex-row gap-2 items-center">
                {" "}
                <FaLocationDot className="text-[red] animate-pulse" />Dombivali
              </h1>
            </div>
            <ul className="flex flex-row flex-wrap gap-x-5 gap-y-2 text-sm">
              <Link
                href="/region/south-mumbai-1"
                className="hover:text-amber-400 hover:underline"
              >
                Lodha Bellevue
              </Link>
              <Link
                href="/region/south-mumbai-2"
                className="hover:text-amber-400 hover:underline"
              >
                Modern Vivarea
              </Link>
              <Link
                href="/region/south-mumbai-3"
                className="hover:text-amber-400 hover:underline"
              >
                Runwal7
              </Link>
              <Link
                href="/region/south-mumbai-4"
                className="hover:text-amber-400 hover:underline"
              >
                Downhrefwn25
              </Link>
              <Link
                href="/region/south-mumbai-5"
                className="hover:text-amber-400 hover:underline"
              >
                Lodha Marq
              </Link>
              <Link
                href="/region/south-mumbai-6"
                className="hover:text-amber-400 hover:underline"
              >
                Rushrefmjee
              </Link>
              <Link
                href="/region/south-mumbai-7"
                className="hover:text-amber-400 hover:underline"
              >
                Sambhav
              </Link>
              <Link
                href="/region/south-mumbai-8"
                className="hover:text-amber-400 hover:underline"
              >
                Raheja Imperia
              </Link>
              <Link
                href="/region/south-mumbai-9"
                className="hover:text-amber-400 hover:underline"
              >
                Suraj Palette
              </Link>
            </ul>
          </div>
          <div className="Thane px-2">
            <div className="heading ">
              <h1 className="text-xl mb-4  flex flex-row gap-2 items-center">
                {" "}
                <FaLocationDot className="text-[red] animate-pulse" /> Thane
              </h1>
            </div>
            <ul className="flex flex-row flex-wrap gap-x-5 gap-y-2 text-sm">
              <Link
                href="/region/thane-1"
                className="hover:text-amber-400 hover:underline"
              >
                Lodha Amara
              </Link>
              <Link
                href="/region/thane-2"
                className="hover:text-amber-400 hover:underline"
              >
                Kalpatru Parkcity
              </Link>
              <Link
                href="/region/thane-3"
                className="hover:text-amber-400 hover:underline"
              >
                Rushrefmjee
              </Link>
              <Link
                href="/region/thane-4"
                className="hover:text-amber-400 hover:underline"
              >
                Oberoi Jardin
              </Link>
              <Link
                href="/region/thane-5"
                className="hover:text-amber-400 hover:underline"
              >
                Narang Parivado
              </Link>
            </ul>
          </div>
          <div className="navi-mumbai px-2">
            <div className="heading ">
              <h1 className="text-xl mb-4  flex flex-row gap-2 items-center">
                {" "}
                <FaLocationDot className="text-[red] animate-pulse" />Navi Mumbai
              </h1>
            </div>
            <ul className="flex flex-row flex-wrap gap-x-5 gap-y-2 text-sm">
              <Link
                href="/region/navi-mumbai-1"
                className="hover:text-amber-400 hover:underline"
              >
                Nova10Elegance
              </Link>
              <Link
                href="/region/navi-mumbai-2"
                className="hover:text-amber-400 hover:underline"
              >
                {" "}
                Kamdhenu Crown{" "}
              </Link>
              <Link
                href="/region/navi-mumbai-3"
                className="hover:text-amber-400 hover:underline"
              >
                Kamdhenu Neo
              </Link>
              <Link
                href="/region/navi-mumbai-4"
                className="hover:text-amber-400 hover:underline"
              >
                One Akshar
              </Link>
              <Link
                href="/region/navi-mumbai-5"
                className="hover:text-amber-400 hover:underline"
              >
                Maithilis
              </Link>
            </ul>
          </div>
          <div className="Vikhroli East px-2">
            <div className="heading ">
              <h1 className="text-xl mb-4  flex flex-row gap-2 items-center">
                {" "}
                <FaLocationDot className="text-[red] animate-pulse" />Vikhroli East
              </h1>
            </div>
            <ul className="flex flex-row flex-wrap gap-x-5 gap-y-2 text-sm">
              <Link
                href="/region/navi-mumbai-1"
                className="hover:text-amber-400 hover:underline"
              >
                Nova10Elegance
              </Link>
              <Link
                href="/region/navi-mumbai-2"
                className="hover:text-amber-400 hover:underline"
              >
                {" "}
                Kamdhenu Crown{" "}
              </Link>
              <Link
                href="/region/navi-mumbai-3"
                className="hover:text-amber-400 hover:underline"
              >
                Kamdhenu Neo
              </Link>
              <Link
                href="/region/navi-mumbai-4"
                className="hover:text-amber-400 hover:underline"
              >
                One Akshar
              </Link>
              <Link
                href="/region/navi-mumbai-5"
                className="hover:text-amber-400 hover:underline"
              >
                Maithilis
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterSection;
