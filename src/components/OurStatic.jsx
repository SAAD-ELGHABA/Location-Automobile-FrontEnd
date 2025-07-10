import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Car, BadgePercent, Users, Award } from "lucide-react";

function OurStatic() {
  const { t } = useTranslation();

  const [cars] = useState(20);
  const [marques] = useState(5);
  const [clients] = useState(98);
  const [experience] = useState(10);

  return (
    <div className="py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
        <div className="flex flex-col items-center space-y-2">
          <Car className="w-8 h-8" />
          <h1 className="text-3xl font-bold">{cars}+</h1>
          <p className="text-sm">{t("ourStatic.carsPromo")}</p>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <BadgePercent className="w-8 h-8" />
          <h1 className="text-3xl font-bold">{marques}+</h1>
          <p className="text-sm">{t("ourStatic.partnerBrands")}</p>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <Users className="w-8 h-8" />
          <h1 className="text-3xl font-bold">{clients}%</h1>
          <p className="text-sm">{t("ourStatic.happyClients")}</p>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <Award className="w-8 h-8" />
          <h1 className="text-3xl font-bold">{experience}+</h1>
          <p className="text-sm">{t("ourStatic.yearsExperience")}</p>
        </div>
      </div>
    </div>
  );
}

export default OurStatic;
