import React from "react";

const PopupModal = () => {
  return (
    <div className="fixed  flex-col inset-0 flex items-center justify-center z-50">
      <div className="bg-black opacity-50 absolute inset-0"></div>
      <div className="relative bg-white rounded-full w-20 h-20 ">
        <div className="text-center">
          <div className="flex items-center justify-center top-3 bottom-3 relative">
            <svg
              className="w-12 h-12 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
      </div>
      <p className="text-green-300 font-bold text-3xl">Payment Successfull</p>
    </div>
  );
};

export default PopupModal;
