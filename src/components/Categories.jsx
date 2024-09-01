import {categories } from "../data/data"

export const Categories = () => {
  return (
    <div className="max-w-[1520px] mx-auto py-12 px-4">
      <h1 className="text-orange-700 font-bold text-center text-2xl">
        Trending Categories
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-5 py-5 px-2">
        {categories.map((item)=> {
            return (
                <div key={item.id} className="px-1 py-2 sm:p-4 flex justify-center items-center hover:scale-105 duration-300">
                    <img src={item.image} alt={item.name} className="w-40 h-10 object-cover rounded-xl cursor-pointer shadow-2xl" />
                </div>
            )
        })}
      </div>
    </div>
  );
};
