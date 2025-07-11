import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const carBrands = [
  { name: "Dacia", logo: "/cars_logo/dacia.png" },
  { name: "Renault", logo: "/cars_logo/car-1.png" },
  { name: "Hunday", logo: "/cars_logo/car-2.png" },
  { name: "Volkswagen", logo: "/cars_logo/car-3.png" },
  { name: "Opel", logo: "/cars_logo/car-4.png" },
  { name: "Audi", logo: "/cars_logo/car-5.png" },
];

const CarBrandsSlick = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 5 } },
      { breakpoint: 968, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="mx-auto bg-white py-4" style={{ maxWidth: "90%" }}>
      <div className="w-40 h-1 bg-black mb-5 mx-auto">

      </div>
      <Slider {...settings}>
        {carBrands.map(({ name, logo }) => (
          <div>
            <div
              key={name}
              className="flex lg:flex-col items-center justify-center gap-2 px-4 py-2 rounded"
            >
              <img src={logo} alt={name} className="w-32 object-contain" />
              <span
                className={`${
                  name === "Volkswagen" ? "text-2xl" : "text-3xl"
                } lg:text-3xl font-bold tracking-widest uppercase`}
              >
                {name}
              </span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarBrandsSlick;
