import { Car, CircleCheckBig, Fuel, Gauge } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";

function InfosVehicule({ vehicule }) {
  const { i18n } = useTranslation();

  return (
    <div className="my-10 w-[90%] mx-auto">
      <div className="flex items-center space-x-2 pb-2 border-b border-gray-300">
        <Car className="lg:h-14 lg:w-14 h-8 w-8" />
        <h3 className="mt-2 text-xl lg:text-2xl font-bold">
          {vehicule?.brand + " " + vehicule?.model + " " + vehicule?.year}
        </h3>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-2/3 ">
          <p className="mt-2 text-sm lg:text-lg text-gray-600">
            {typeof vehicule?.description === "string"
              ? vehicule.description
              : vehicule?.description?.[i18n?.language] ||
                vehicule?.description?.["en"] ||
                ""}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            mollitia laboriosam veritatis consequatur, provident eligendi in
            vero possimus ratione praesentium minima nisi natus amet sed? Et
            deserunt illo labore aut!
          </p>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-6 my-4">
            <p className="flex items-center space-x-2">
              <Gauge className="h-8 w-8" />
              <span className="font-medium">250 km/h</span>
            </p>

            <p className="flex items-center">
              <img
                src="https://img.icons8.com/?size=100&id=DUO4hbw8nQvZ&format=png&color=000000"
                alt="Seats"
                className="w-8 h-8"
              />
              <span className="font-medium ms-2">{vehicule?.seats}</span>
            </p>

            <p className="flex items-center space-x-2">
              <Fuel className="h-8 w-8" />
              <span className="font-medium">
                {vehicule?.fuel ? vehicule?.fuel : "Diesel"}
              </span>
            </p>

            <p className="flex items-center">
              <img
                src="https://img.icons8.com/?size=100&id=ZO0B2gs3CTMo&format=png&color=000000"
                alt="Transmission"
                className="w-8 h-8"
              />
              <span className="font-medium ms-2">{vehicule?.transmission}</span>
            </p>

            <p className="flex items-center">
              <img
                src="https://img.icons8.com/?size=100&id=93677&format=png&color=000000"
                alt="Doors"
                className="w-8 h-8"
              />
              <span className="font-medium ms-2">
                {vehicule?.doors ? vehicule?.doors : 4} doors
              </span>
            </p>

            <p className="flex items-center">
              <img
                src="https://img.icons8.com/?size=100&id=4361&format=png&color=000000"
                alt="Color"
                className="w-8 h-8"
              />
              <span className="font-medium ms-2">
                {vehicule?.color ? vehicule?.color : "black"}
              </span>
            </p>

            <p className="flex items-center">
              <CircleCheckBig className="h-8 w-8" />
              <span className="font-medium ms-2">
                {vehicule?.airConditioning ? "A/C" : "No A/C"}
              </span>
            </p>

            <p className="flex items-center">
              <img
                src="https://img.icons8.com/?size=100&id=739&format=png&color=000000"
                alt="GPS"
                className="w-8 h-8"
              />
              <span className="font-medium ms-2">
                {vehicule?.gps ? "GPS" : "No GPS"}
              </span>
            </p>

            <p className="flex items-center">
              <img
                src="https://img.icons8.com/?size=100&id=3539&format=png&color=000000"
                alt="Bluetooth"
                className="w-8 h-8"
              />
              <span className="font-medium ms-2">
                {vehicule?.bluetooth ? "Bluetooth" : "No Bluetooth"}
              </span>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center lg:w-1/3">
          <h1 className="text-2xl lg:text-4xl font-black relative inline-block ">
            <span className="relative z-10 text-white">
              $ {vehicule?.pricePerDay}
              {" /day"}
            </span>
            <span
              className="absolute -inset-5 z-0"
              style={{
                backgroundColor: "black",
                clipPath: "polygon(0 20%, 100% 10%, 100% 80%, 0% 100%)",
                transform: "rotate(-1deg)",
              }}
            ></span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default InfosVehicule;
