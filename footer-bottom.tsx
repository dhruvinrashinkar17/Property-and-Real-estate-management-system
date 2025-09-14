import React from "react";

const BottomSection = () => {
  return (
    <div>
      <div className="w-full pt-2 mt-1 text-center bg-[#391b7196]">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 justify-center items-center py-2">
          <p>
            &copy; All rights reserved {new Date().getFullYear()}. HM Properties
          </p>
          <p className="py-2">
            Design & Developed by{" "}
            <a
              href="https://stewdigital.com/"
              className=" text-[white] font-bold hover:underline"
              target="_blank"
            >
              Stew Digital Solution.
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
