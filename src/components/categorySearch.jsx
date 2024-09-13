import React, { useState, useEffect } from "react";
import GlobalApi from "./utils/GlobalApi";

function CategorySearch() {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = () => {
    GlobalApi.getCategory().then((resp) => {
      console.log(resp.data.data);
      setCategoryList(resp.data.data); // Correctly setting the category list
    });
  };

  return (
    <div className="mb-10 items-center px-5 flex flex-col gap-2">
      <h2 className="font-bold text-4xl tracking-wide">
        Search <span className="text-purple-500">Hotels</span>
      </h2>
      <h2 className="text-gray-500">
        Choose Your Cozy Apartment Type in one click
      </h2>
      <div className="flex w-full max-w-sm items-center m-2 space-x-2">
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded p-2 w-full"
        />
        <button
          type="submit"
          className="bg-purple-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>

      <div className="grid grid-cols-3 mt-5 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {/* Conditionally rendering the category list */}
        {categoryList && categoryList.length > 0
          ? categoryList.map(
              (item, index) =>
                index < 4 && (
                  <div
                    key={index}
                    className="flex flex-col text-center items-center p-5 bg-purple-600 m-2 rounded-lg cursor-pointer gap-2 hover:scale-110 transition-all ease-in-out"
                  >
                    <img
                      src={item.attributes?.Icon?.data?.attributes?.url}
                      alt="icon"
                      width={40}
                      height={40}
                    />
                    <label className="text-blue-600 text-sm">
                      {item?.attributes?.Name}
                    </label>
                  </div>
                )
            )
          : // Displaying skeleton loaders when the category list is empty or loading
            [1, 2, 3, 4, 5, 6].map((_, index) => (
              <div
                key={index}
                className="w-[100px] h-[60px] bg-slate-200 animate-pulse rounded-lg"
              ></div>
            ))}
      </div>
    </div>
  );
}

export default CategorySearch;
