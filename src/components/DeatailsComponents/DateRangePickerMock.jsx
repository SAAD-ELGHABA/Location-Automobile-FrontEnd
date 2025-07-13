import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "../../index.css";
import { useTranslation } from "react-i18next";
import ReservationForm from "@components/ReservationForm";

import { enUS, fr, arSA } from "date-fns/locale";

export default function DateRangePickerMock() {
  const [range, setRange] = useState({ from: undefined, to: undefined });
  const [isMobile, setIsMobile] = useState(false);

  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  let locale = enUS;
  if (currentLang === "fr") {
    locale = fr;
  } else if (currentLang === "ar") {
    locale = arSA;
  }

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleReset = () => {
    setRange({ from: undefined, to: undefined });
  };

  return (
    <div className="flex flex-col items-center gap-6 mt-20 w-full">
      <h2 className="text-xl font-bold">{t("DatePicker.selectRange")}</h2>

      <div
        className={`flex w-[90%] ${
          isMobile ? "flex-col" : "flex-row justify-between"
        }`}
      >
        <div
          className={`p-4 rounded w-full lg:max-w-1/3 lg:min-w-1/3 flex flex-col items-center gap-6 self-start ${
            isMobile ? "order-1" : "order-2 sticky top-40"
          }`}
        >
          <div className="text-center text-lg lg:text-xl w-full">
            {range?.from && range?.to ? (
              <p className="font-medium">{t("DatePicker.picked")}</p>
            ) : (
              <p className="text-gray-950">{t("DatePicker.pleaseSelect")}</p>
            )}
          </div>
          <div className="grid grid-cols-2 space-x-2 rounded-top rounded border p-2 border-gray-300 w-full">
            <div>
              <div>{t("DatePicker.startDate")}</div>
              <div className="text-gray-500">
                {range?.from ? format(range?.from, "PPP", { locale }) : "dd/mm/yy"}
              </div>
            </div>
            <div className="border-s border-gray-300 ps-2">
              <div>{t("DatePicker.endDate")}</div>
              <div className="text-gray-500">
                {range?.to ? format(range?.to, "PPP", { locale }) : "dd/mm/yy"}
              </div>
            </div>
          </div>
          <button
            onClick={handleReset}
            className="px-4 py-2 rounded bg-black text-white hover:bg-gray-900 cursor-pointer w-5/6"
          >
            {t("DatePicker.reset")}
          </button>
        </div>

        <div
          dir={currentLang === "ar" ? "rtl" : "ltr"}
          className={`${isMobile ? "order-2" : "order-1"} flex flex-col`}
        >
          <DayPicker
            mode="range"
            selected={range}
            onSelect={setRange}
            numberOfMonths={isMobile ? 1 : 2}
            defaultMonth={new Date()}
            locale={locale} 
            className="rounded-lg p-4"
          />
          <ReservationForm />
          <div className="mt-6 p-4 border border-gray-100 rounded bg-gray-50 text-start text-gray-800 text-xs">
            <p className="text-base md:text-sm">
              {t("DatePicker.afterFormMessage")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
