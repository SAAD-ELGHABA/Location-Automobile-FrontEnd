import React from "react";
import { useTranslation } from "react-i18next";
import bg from "/assets/section-2.jpg";
import { Phone } from "lucide-react";

function Section_2() {
  const { t } = useTranslation();

  return (
    <div
      className="relative bg-cover bg-center text-gray-900 py-10"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className=" bg-opacity-80 p-8 md:p-16 max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2 space-y-4">
          <p className="text-sm text-gray-600 uppercase tracking-wider">
            {t("info.title")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Kadrassi <br /> Rent Cars
          </h2>
          <p className="text-lg">{t("info.description")}</p>
          <div className="flex items-center gap-4 mt-4">
            <div className="bg-black p-3 rounded-full text-white">
              <Phone />
            </div>
            <div>
              <div className="flex flex-col gap-2">
                <p className="text-sm">{t("footer.contact")}</p>
                <a
                  href={`tel:+${import.meta.env.VITE_WHATSUPP_NUM}`}
                  className="font-semibold underline"
                >
                  +{import.meta.env.VITE_WHATSUPP_NUM}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 space-y-6">
          <div>
            <h3 className="font-bold text-xl">
              {t("section2.competitivePricesTitle")}
            </h3>
            <p>{t("section2.competitivePricesDesc")}</p>
          </div>
          <div>
            <h3 className="font-bold text-xl">
              {t("section2.easyExperienceTitle")}
            </h3>
            <p>{t("section2.easyExperienceDesc")}</p>
          </div>
          <div>
            <h3 className="font-bold text-xl">
              {t("section2.excellentSupportTitle")}
            </h3>
            <p>{t("section2.excellentSupportDesc")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section_2;
