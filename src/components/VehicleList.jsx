import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import carsData from "../constants/cars.json";
import motorcyclesData from "../constants/motorcycles.json";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

function VehicleList() {
  const { i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState("cars");
  const [vehicles, setVehicles] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    setVehicles(activeTab === "cars" ? carsData : motorcyclesData);
  }, [activeTab]);

  return (
    <div className=" py-10 w-[90%] mx-auto">
      <div className="flex  mb-6 gap-4 justify-between items-center">
        <div className="p-[1px] border text-sm flex rounded">
          <button
            onClick={() => setActiveTab("cars")}
            className={`px-4 py-2 border rounded-l-sm cursor-pointer ${
              activeTab === "cars"
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            Cars
          </button>
          <button
            onClick={() => setActiveTab("motorcycles")}
            className={`px-4 py-2 border rounded-e-sm cursor-pointer ${
              activeTab === "motorcycles"
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            Motorcycles
          </button>
        </div>
        <h2 className=" md:text-xl font-bold text-center">
          {t("vehicles.title")}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {vehicles.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: item.id * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="border border-black rounded p-4 shadow relative"
          >
            <img
              src={item.imageUrl}
              alt={`${item.brand} ${item.model}`}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="mt-2 text-lg font-semibold">
              {item.brand} {item.model} ({item.year})
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              {typeof item.description === "string"
                ? item.description
                : item.description[i18n.language] || item.description["en"]}
            </p>
            <p className="mt-1 font-bold">${item.pricePerDay} / day</p>
            <p>Seats: {item.seats}</p>
            <p>Transmission: {item.transmission}</p>
            <button className="cursor-pointer px-6 py-2 border border-black hover:border-slate-200 hover:text-slate-200 rounded-md text-white bg-black font-semibold transition mt-2">
              {t("hero.button1")}
            </button>
            <Heart className="absolute top-3 right-3" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default VehicleList;
