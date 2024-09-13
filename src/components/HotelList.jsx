import React from "react";

function HotelList({ HotelList }) {
  return (
    <div className="mb-10 px-8">
      <h2 className="font-bold text-xl">Our Top Rated Rooms</h2>
      <div
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 mt-4 lg:grid-cols-4 
      gap-7"
      >
        {HotelList && HotelList.length > 0
          ? HotelList.map((item, index) => (
              <div
                key={index}
                className="border-[1px] rounded-lg p-3 cursor-pointer border-primary hover:shadow-sm transition-all ease-in-out"
              >
                <img
                  src={item.attributes?.image?.data?.attributes?.url}
                  alt="hotel"
                  width={500}
                  height={200}
                  className="h-[200px] w-full object-cover rounded"
                />
                <div className="mt-3 items-baseline flex flex-col gap-1">
                  <h2 className="text-[10px] bg-blue-100 p-1 rounded-full px-2 text-primary">
                    {item.attributes?.categories?.data[0]?.attributes?.Name}
                  </h2>
                  <h2 className="font-bold">{item.attributes?.Name}</h2>
                  <h2 className="text-primary text-sm">
                    {item.attributes?.Year_of_Experience}
                  </h2>
                  <h2 className="text-grey-500 text-sm">
                    {item.attributes?.Address}
                  </h2>
                  <h2
                    className="p-2 px-3 border-[1px] border-primary text-primary rounded-full
                   w-full text-center text-[11px] mt-1 cursor-pointer hover:bg-primary hover:text-white"
                  >
                    Book Now
                  </h2>
                </div>
              </div>
            ))
          : // Skeleton effect when no data is available
            [1, 2, 3, 4, 5, 6].map((item, index) => (
              <div
                key={index}
                className="h-[220px] bg-slate-200 w-full rounded-lg animate-pulse"
              ></div>
            ))}
      </div>
    </div>
  );
}

export default HotelList;
