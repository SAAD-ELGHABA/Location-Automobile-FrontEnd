import React, { useEffect, useState } from "react";
import carsData from "../constants/cars.json";
import motorcyclesData from "../constants/motorcycles.json";
import ImagesPresentation from "@components/DeatailsComponents/ImagesPresentation";
import DateRangePickerMock from "@components/DeatailsComponents/DateRangePickerMock";
import InfosVehicule from "@components/DeatailsComponents/InfosVehicule";
import ReservationForm from "@components/ReservationForm";
import { useParams } from "react-router-dom";
function CarDetails() {
  const [vehicule, setVehicule] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { slug } = useParams();
  useEffect(() => {
    setIsLoading(true);
    window.scrollTo(0, 0);
    const allVehicules = [...carsData, ...motorcyclesData];
    const foundVehicule = allVehicules.find((v) => v.slug === slug);
    if (foundVehicule) {
      setTimeout(() => {
        setVehicule(foundVehicule);
        setIsLoading(false);
      }, 2000);
    } else {
      console.error("Vehicule not found");
      setIsLoading(false);
    }
  }, []);
  return isLoading ? (
    <div className="min-h-screen ">
      <div className="flex flex-col px-4 py-20 gap-2 lg:flex-row animate-pulse">
        <div className="h-60 lg:w-[80%] lg:h-[500px] bg-gray-300 "></div>
        <div className="grid grid-cols-3 lg:grid-cols-1 gap-2 lg:w-[20%] overflow-y-auto">
          <div className="bg-gray-300 h-20 lg:h-45 "></div>
          <div className="bg-gray-300 h-20 lg:h-45 "></div>
          <div className="bg-gray-300 h-20 lg:h-45 "></div>
        </div>
      </div>
    </div>
  ) : (
    <div className="min-h-screen px-4 py-20">
      <ImagesPresentation images={vehicule?.imageUrl} />
      <InfosVehicule vehicule={vehicule}/>
      <DateRangePickerMock />
    </div>
  );
}

export default CarDetails;
