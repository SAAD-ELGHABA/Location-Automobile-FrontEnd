import React from "react";
import { useTranslation } from "react-i18next";
import BackgroundVideo from "@components/BackgroundVideo";
import { Facebook, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      <BackgroundVideo />
      <div className="text-center z-10 px-4 flex flex-col justify-center gap-4">
        <h1 className="text-white text-5xl font-bold mb-4">
          {t("hero.title")}
        </h1>
        <p className="text-white text-sm lg:text-lg max-w-xl mx-auto">
          {t("hero.subtitle")}
        </p>
        <div className="flex gap-4 z-10 justify-center">
          <button className="cursor-pointer px-6 py-2 border border-white hover:border-slate-200 hover:text-slate-200 rounded-md text-white font-semibold transition">
            {t("hero.button1")}
          </button>
          <button className="cursor-pointer px-6 py-2 bg-white rounded-md text-black font-semibold transition hover:bg-slate-200">
            {t("hero.button2")}
          </button>
        </div>
      </div>
      <div className="absolute bottom-22 grid grid-cols-3 items-center mx-4 w-full max-w-md">
        <div className="w-30 h-[1px] bg-white"></div>

        <div className="flex justify-around">
          <a
            href={`https://facebook.com/${import.meta.env.VITE_FACEBOOK_URL}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="w-5 h-5 text-white cursor-pointer hover:text-slate-300" />
          </a>

          <a
            href={`https://wa.me/${import.meta.env.VITE_WHATSUPP_NUM}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="w-5 h-5 text-white cursor-pointer hover:text-slate-300" />
          </a>

          <a
            href={`https://instagram.com/${
              import.meta.env.VITE_INSTAGRAMM_URL
            }`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="w-5 h-5 text-white cursor-pointer hover:text-slate-300" />
          </a>
        </div>

        <div className="w-30 h-[1px] bg-white"></div>
      </div>
    </section>
  );
}
