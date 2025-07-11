import React from "react";
import { useTranslation } from "react-i18next";
import { MapPin, Phone, Mail } from "lucide-react";

function ContactUs() {
  const { t } = useTranslation();

  return (
    <section className="py-12 w-[90%] mx-auto  text-gray-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div >
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            {t("contactUs.getInTouchTitle")}
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            {t("contactUs.getInTouchDescription1")}
            <br />
            {t("contactUs.getInTouchDescription2")}
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-gray-700">
              <MapPin className="h-6 w-6 mr-3 text-black" />{" "}
              <span>{import.meta.env.VITE_ADRESSE}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Phone className="h-6 w-6 mr-3 text-black" />{" "}
              <span>+{import.meta.env.VITE_WHATSUPP_NUM}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Mail className="h-6 w-6 mr-3 text-black" />{" "}
              <span>{import.meta.env.VITE_EMAIL}</span>
            </div>
          </div>
        </div>

        <div className="w-[95%]">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block mb-1 font-semibold text-gray-700 text-sm"
                >
                  {t("contactUs.firstName")}
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder=""
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block mb-1 font-semibold text-gray-700 text-sm"
                >
                  {t("contactUs.lastName")}
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder=""
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-1 font-semibold text-gray-700 text-sm"
              >
                {t("contactUs.email")}
              </label>
              <input
                type="email"
                id="email"
                placeholder=""
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label
                htmlFor="phoneNumber"
                className="block mb-1 font-semibold text-gray-700 text-sm"
              >
                {t("contactUs.phoneNumber")}
              </label>
              <input
                type="tel"
                id="phoneNumber"
                placeholder=""
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block mb-1 font-semibold text-gray-700 text-sm"
              >
                {t("contactUs.message")}
              </label>
              <textarea
                id="message"
                placeholder=""
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                rows="6"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full md:w-auto bg-black text-white px-8 py-3 rounded-md hover:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-300 ease-in-out cursor-pointer"
            >
              {t("contactUs.sendMessage")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
