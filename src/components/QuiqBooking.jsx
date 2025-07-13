import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import DateRangePickerMock from "@components/DeatailsComponents/DateRangePickerMock";
import { X } from "lucide-react";

function QuiqBooking({ setVehiculeSelected, vehiculeSelected }) {
  const modalRef = useRef(null);
  const [height, setHeight] = useState(700);
  const [isResizing, setIsResizing] = useState(false);

  const startResizing = (e) => {
    e.preventDefault();
    setIsResizing(true);
  };

  const startResizingTouch = (e) => {
    e.preventDefault();
    setIsResizing(true);
  };

  const stopResizing = () => {
    setIsResizing(false);
  };

  const resize = (e) => {
    if (!isResizing) return;

    const clientY = e.clientY ?? e.touches?.[0]?.clientY;

    if (!clientY) return;

    const windowHeight = window.innerHeight;
    const newHeight = Math.min(windowHeight - clientY, windowHeight - 100);
    setHeight(newHeight);
  };

  useEffect(() => {
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResizing);
    window.addEventListener("touchmove", resize);
    window.addEventListener("touchend", stopResizing);

    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
      window.removeEventListener("touchmove", resize);
      window.removeEventListener("touchend", stopResizing);
    };
  }, [isResizing]);

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-end justify-center z-50"
      onClick={() => {
        setVehiculeSelected(null);
      }}
    >
      <motion.div
        ref={modalRef}
        className="bg-white p-6 rounded-t-xl shadow-2xl w-[98%] max-w-[98%] overflow-y-auto scrollbar-transparent relative"
        style={{ height: `${height}px`, maxHeight: "95vh" }}
        onClick={(e) => e.stopPropagation()}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className="absolute top-0 left-0 w-full h-2 bg-gray-300 hover:bg-gray-400 cursor-ns-resize touch-none"
          onMouseDown={startResizing}
          onTouchStart={startResizingTouch}
          style={{ zIndex: 10 }}
        />
        <div className="flex justify-end  mb-2">
          <button
            className="p-2 rounded-full bg-[#eeee] cursor-pointer"
            onClick={() => {
              setVehiculeSelected(null);
            }}
          >
            <X />
          </button>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-xl font-medium">
            {vehiculeSelected?.brand +
              " " +
              vehiculeSelected?.model +
              " " +
              vehiculeSelected?.year}
          </div>
          <div className="bg-black text-white px-3 py-2 font-medium rounded">
            MAD {vehiculeSelected?.pricePerDay} /day
          </div>
        </div>

        <DateRangePickerMock />
      </motion.div>
    </div>
  );
}

export default QuiqBooking;
