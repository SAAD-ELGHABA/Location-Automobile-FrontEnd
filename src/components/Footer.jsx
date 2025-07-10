import React from "react";
import { Facebook, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Logo from "../assets/Logo";
export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-white py-10 relative">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Logo />
          <p className="text-sm text-gray-400 mt-3">
            {t("footer.description")}
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            {t("footer.linksTitle")}
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-gray-300">
                {t("footer.about")}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                {t("footer.contact")}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                {t("footer.terms")}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">{t("footer.followUs")}</h3>
          <div className="flex space-x-4">
            <a
              href={`https://facebook.com/${import.meta.env.VITE_FACEBOOK_URL}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="w-6 h-6 text-white cursor-pointer hover:text-slate-300 hover:scale-110 transition" />
            </a>
            <a
              href={`https://wa.me/${import.meta.env.VITE_WHATSUPP_NUM}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="w-6 h-6 text-white cursor-pointer hover:text-slate-300 hover:scale-110 transition" />
            </a>
            <a
              href={`https://instagram.com/${
                import.meta.env.VITE_INSTAGRAMM_URL
              }`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-6 h-6 text-white cursor-pointer hover:text-slate-300 hover:scale-110 transition" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} RentalCars. {t("footer.rights")}
      </div>
    </footer>
  );
}
