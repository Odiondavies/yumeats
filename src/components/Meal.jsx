import { useState } from "react";
import { mealData } from "../data/data";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Meal = () => {
  const [originalFoods] = useState(mealData);
  const [foods, setFoods] = useState(originalFoods);

  const filterCat = (category) => {
    if (category === "all") {
      setFoods(originalFoods);
    } else {
      setFoods(
        originalFoods.filter((item) => {
          return item.category.toLowerCase() === category.toLowerCase();
        })
      );
    }
  };
  return (
    <div className="max-w-[1520px] m-auto px-4 py-12">
      <h1 className="text-orange-500 font-bold text-2xl text-center py-2">
        Our Meals
      </h1>
      <div className="flex flex-col lg:flex-row justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-1 sm:flex  justify-center md:justify-center gap-2">
          <button
            onClick={() => filterCat("all")}
            className="m-1 border-orange-700 bg-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-orange-700"
          >
            All
          </button>
          <button
            onClick={() => filterCat("pizza")}
            className="m-1 border-orange-700 bg-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-orange-700"
          >
            Pizza
          </button>
          <button
            onClick={() => filterCat("chicken")}
            className="m-1 border-orange-700 bg-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-orange-700"
          >
            Chicken
          </button>
          <button
            onClick={() => filterCat("salad")}
            className="m-1 border-orange-700 bg-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-orange-700"
          >
            Salad
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 py-4">
        {foods.map((item) => {
          return (
            <div
              key={item.id}
              className=" border-none hover:scale-105 duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-[200px] w-full object-cover rounded-lg"
              />
              <div className="flex justify-between py-2 px-2">
                <p className="font-bold">{item.name}</p>
                <p className="bg-orange-700 w-18 h-18 rounded-full -mt-10 border-8 py-4 px-2 text-white font-bold border-white">
                  {item.price}
                </p>
              </div>
              <div className="pl-2 py-4">
                <p className="flex items-center text-indigo-600 cursor-pointer -mt-7">
                  View More <HiOutlineArrowNarrowRight className="w-5 ml-2" />
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Meal;
