import { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Featured = () => {
  const sliders = [
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  // console.log(currentIndex + 1);
  const nextButton = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex === sliders.length - 1 ? 0 : prevIndex + 1;
    });
  };

  const prevButton = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex === 0 ? sliders.length - 1 : prevIndex - 1;
    });
  };

  const moveToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    let interval = setInterval(() => {
      nextButton();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-[1528px] h-[508px] w-full px-4 py-4 relative group">
      <div
        className="w-full h-full rounded-2xl bg-cover bg-center duration-500"
        style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}
      ></div>
      <div
        onClick={prevButton}
        className="hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] ease left-5 text-2xl bg-orange-700 rounded-full p-2 cursor-pointer"
      >
        <BsChevronCompactLeft />
      </div>
      <div
        onClick={nextButton}
        className=" hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 text-2xl bg-orange-700 rounded-full p-2 cursor-pointer"
      >
        <BsChevronCompactRight />
      </div>

      <div className="flex top-4 justify-center py-5">
        {sliders.map((slideItem, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => moveToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Featured;
