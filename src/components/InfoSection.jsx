import React from "react";
import { useTranslation } from "react-i18next";
import {  Handshake } from "lucide-react";

export default function InfoSection() {
  const { t } = useTranslation();

  return (
    <section id="info" className="py-44 px-4 bg-white text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <Handshake className="w-22 h-22 text-black mb-4"/>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {t("info.title")}
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          {t("info.description")}
        </p>
      </div>
    </section>
  );
}
