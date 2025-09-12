import Image from "next/image";
import React from "react";
import CompanyLogo from "@/../../public/logo.png";
import Link from "next/link";
import { FaEnvelope, FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

const TopSection = () => {
  return (
    <div className=" py-2">
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        <div className="left  flex flex-col gap-2  p-3">
          <div className="img">
            <Image
              height={300}
              width={300}
              src={CompanyLogo}
              className="w-30 h-30 rounded-3xl"
              alt="logo"
            />
          </div>
          <div className="about text-justify">
            <p>
              HM Properties is a premium real estate consultancy firm committed
              to earning Customer Trust and Satisfaction through every
              Interaction and Transaction.
            </p>
          </div>
        </div>
        <div className="center md:text-center p-3">
          <h1 className="uppercase text-2xl font-bold mb-6">Link list</h1>
          <ul className="flex flex-col gap-2 mt-4">
            <li>
              <Link href="/PrivacyAndPolicy" className="hover:text-amber-300">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/TermesAndCondition" className="hover:text-amber-300">
                Term & Condition
              </Link>
            </li>
          </ul>
        </div>
        <div className="right p-3">
          <div className="address ">
            <h1 className="uppercase text-2xl font-bold mb-6">Address List</h1>
            <div className="addrs-box flex flex-col gap-2">
              <div className="location flex flex-row items-center gap-3">
                <span>
                  <FaLocationDot className="text-[red]" />
                </span>
                <p>
                 B-13, Twin House Colony, Near Fire Brigade, Parksite, Vikroli (West), Mumbai – 400079
                </p>
              </div>
              <div className="phone flex flex-row items-center gap-3">
                <span>
                  <FaPhoneAlt className="text-[red]" />
                </span>
                <p>+91 9867030366
</p>
              </div>
              <div className="phone flex flex-row items-center gap-3">
                <span>
                  <FaPhoneAlt className="text-[red]" />
                </span>
                <p>+91 9004709061</p>
              </div>
              <div className="email flex flex-row items-center gap-3">
                <span>
                  <FaEnvelope className="text-[red]" />
                </span>
                <p>hmproperties0@gmail.com</p>
              </div>
              {/* <div className="email flex flex-row items-center gap-3">
                <span>
                  <FaEnvelope className="text-[red]" />
                </span>
                <p>xyz@gmail.com</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
