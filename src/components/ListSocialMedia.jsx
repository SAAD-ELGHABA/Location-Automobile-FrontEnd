import React, { useEffect, useState } from "react";
import {
  CircleEllipsis,
  X,
  Facebook,
  Instagram,
  MessageCircle,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import { motion, AnimatePresence } from "framer-motion";

function ListSocialMedia() {
  const [showButton, setShowButton] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
        setOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {showButton && (
        <div className="fixed bottom-14 right-6 flex flex-col items-end z-50">
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-3 mb-4"
              >
                <a
                  href={`https://facebook.com/${
                    import.meta.env.VITE_FACEBOOK_URL
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-10 h-10 text-black bg-white rounded-full p-1 cursor-pointer hover:scale-110 transition" />
                </a>
                <a
                  href={`https://wa.me/${import.meta.env.VITE_WHATSUPP_NUM}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="w-10 h-10 text-black bg-white p-1 rounded-full cursor-pointer hover:scale-110 transition" />
                </a>
                <a
                  href={`https://instagram.com/${
                    import.meta.env.VITE_INSTAGRAMM_URL
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-10 h-10 text-black rounded-full bg-white p-1 rounded-fullcursor-pointer hover:scale-110 transition" />
                </a>
              </motion.div>
            )}
          </AnimatePresence>
          <button
            onClick={() => setOpen(!open)}
            className={` rounded-full shadow-xl  cursor-pointer ${!open && "animate-bounce"}`}
          >
            {open ? (
              <X className="w-10 h-10 text-black bg-white rounded-full" />
            ) : (
              <CircleEllipsis className="w-10 h-10 fill-black text-white" />
            )}
          </button>
        </div>
      )}
    </>
  );
}

export default ListSocialMedia;
