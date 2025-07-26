import React from "react";
import { ChevronLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
function ComeBackHistory() {
  const { t } = useTranslation();

  return (
    <div className=" mt-2">
      <button
        className="hover:bg-[#f0f0f0] flex items-center space-x-2 px-4 py-2 rounded cursor-pointer"
        onClick={() => {
          window.history.back();
        }}
      >
        <ChevronLeft className="" />
        <span className="font-medium ">{t("BackHistory.return")}</span>
      </button>
    </div>
  );
}

export default ComeBackHistory;
