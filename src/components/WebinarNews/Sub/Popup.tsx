// Modal.js
import React, { CSSProperties } from "react";
interface Props {
  isOpen: any;
  onClose: any;
  children: any;
  style?: CSSProperties;
}

const PopupModal = ({ isOpen, onClose, children, style }: Props) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 lg:flex lg:items-center lg:justify-center overflow-x-hidden overflow-y-auto outline-none lg:w-9/12 w-11/12 mx-auto"
          style={style}
        >
          <div className="fixed inset-0 bg-gray-800 opacity-80"></div>
          <div
            className="relative z-50 bg-white lg:p-12 rounded-lg"
            style={style}
          >
            <button
              onClick={onClose}
              className="absolute lg:top-0 right-0 m-4 bg-gray-500 text-gray-50 z-50 px-1 rounded hover:bg-gray-700 font-bold focus:outline-none"
              style={style}
            >
              X
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default PopupModal;
