import { Star } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";

export default function RelaxingExperienceHero() {
  const { t } = useTranslation();

  return (
    <section
      className="relative bg-fixed bg-cover bg-center bg-no-repeat text-white flex items-center overflow-hidden"
      style={{
        backgroundImage: "url('/cars_logo/man-driving-car-300x150.jpg')",
        minHeight: "100vh",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div
        className="relative z-10 max-w-2xl px-6 py-12 ml-auto lg:me-4 space-y-4
             bg-[#000000d2] bg-opacity-20 backdrop-blur-xl lg:rounded-lg
             mt-40"
      >
        <div>
          <p className="text-sm mb-2">{t("experience-section.rating")}</p>
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <Star key={index} className="fill-white text-black w-5 h-5" />
            ))}
          </div>
        </div>

        <h1 className="text-4xl font-bold">{t("experience-section.title")}</h1>
        <p>{t("experience-section.description")}</p>
        <button className="bg-black hover:bg-transparent px-6 py-3 rounded-md font-semibold cursor-pointer border border-white">
          {t("experience-section.button")}
        </button>
        <div className="h-30 w-30 bg-white rounded-full blur-3xl absolute top-10 right-5"></div>
      </div>
    </section>
  );
}
