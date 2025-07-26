import React from "react";
import { useTranslation } from "react-i18next";
import { Car, BadgePercent, Users, Award } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function OurStatic() {
  const { t } = useTranslation();

  const [ref, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.3
  });

  const stats = [
    { icon: <Car className="w-8 h-8" />, value: 20, label: t("ourStatic.carsPromo"), suffix: "+" },
    { icon: <BadgePercent className="w-8 h-8" />, value: 5, label: t("ourStatic.partnerBrands"), suffix: "+" },
    { icon: <Users className="w-8 h-8" />, value: 98, label: t("ourStatic.happyClients"), suffix: "%" },
    { icon: <Award className="w-8 h-8" />, value: 10, label: t("ourStatic.yearsExperience"), suffix: "+" },
  ];

  return (
    <div className="py-12" ref={ref}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            {stat.icon}
            <h1 className="text-3xl font-bold">
              {inView ? (
                <CountUp end={stat.value} duration={2} suffix={stat.suffix} />
              ) : (
                `0${stat.suffix}`
              )}
            </h1>
            <p className="text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurStatic;
