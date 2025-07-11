import React from "react";
import { useTranslation } from "react-i18next";

export default function ReservationForm() {
  const { t } = useTranslation();

  return (
    <form className="w-full max-w-3xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex flex-col">
        <label htmlFor="firstName" className="mb-1 text-black font-medium">
          {t("form.firstName")}
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder={t("form.firstNamePlaceholder")}
          className="border border-gray-300 bg-white text-black rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="lastName" className="mb-1 text-black font-medium">
          {t("form.lastName")}
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder={t("form.lastNamePlaceholder")}
          className="border border-gray-300 bg-white text-black rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="email" className="mb-1 text-black font-medium">
          {t("form.email")}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder={t("form.emailPlaceholder")}
          className="border border-gray-300 bg-white text-black rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="phone" className="mb-1 text-black font-medium">
          {t("form.phone")}
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder={t("form.phonePlaceholder")}
          className="border border-gray-300 bg-white text-black rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      <div className="md:col-span-2">
        <button
          type="submit"
          className="w-full lg:w-1/2 bg-black text-white py-2 rounded hover:bg-white hover:text-black border border-black transition-colors cursor-pointer"
        >
          {t("form.submit")}
        </button>
      </div>

    </form>
  );
}
