import React from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import reviews from "../constants/reviews.json";
import { Star } from "lucide-react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ClientReviews() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full py-12 px-4 md:px-8 bg-gray-50">
      <h2 className="text-2xl font-bold mb-8 text-center">
        {currentLang === "ar"
          ? "آراء العملاء"
          : currentLang === "fr"
          ? "Avis des clients"
          : "Client Reviews"}
      </h2>

      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {reviews.map((review) => (
            <div
              key={review.id}
              dir={currentLang === "ar" ? "rtl" : "ltr"}
              className="px-4"
            >
              <div className="p-6 min-h-[200px] flex flex-col justify-between">
                <p className="text-gray-800 mb-4 leading-relaxed">
                  {review.review[currentLang] || review.review["en"]}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-700">
                    {review.name}
                  </span>
                  <div className="flex">
                    {Array.from({ length: review.rating }).map((_, idx) => (
                      <Star key={idx} size={14} fill="black" stroke="black" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ClientReviews;
