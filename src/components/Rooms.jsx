// src/components/Rooms.js
import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function Rooms() {
  const navigate = useNavigate();

  const handleBookNow = (roomType) => {
    navigate(`/booking?roomType=${roomType}`);
  };

  return (
    <div className="p-10">
      <h1 className="font-bold text-center text-4xl md:text-6xl font-serif p-2 m-1">
        Rooms And Suites
      </h1>
      <p className="text-balance text-center text-base md:text-lg font-serif mb-5">
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts.
        <br /> Separated they live in Bookmarksgrove right at the coast of the
        Semantics, a large language ocean.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Deluxe Room */}
        <div className="border shadow-lg rounded-lg overflow-hidden w-74 h-[37rem] mx-auto flex flex-col justify-between">
          <img
            src="/deluxe.jpg" // Make sure you have this image in your public directory
            alt="Deluxe Room"
            className="w-full h-72 object-cover"
          />
          <div className="p-4 text-center flex-grow">
            <h2 className="text-2xl font-bold font-serif mb-2 cursor-pointer hover:text-purple-600">
              Deluxe Room
            </h2>
            <p className="bg-blue-100 text-blue-800 rounded-full py-1 px-3 text-sm font-medium mb-1 inline-block">
              For 2 Persons
            </p>
            <p className="text-gray-500 text-lg mb-3">
              Beginning fourth dominion creeping god was. Beginning, which fly
              yieldi dry beast moved blessed
            </p>
            <p className="text-2xl font-bold text-black mb-2 font-serif cursor-default">
              $120 / per night
            </p>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#6d28d9",
                color: "#ffffff",
                padding: "12px 24px",
                fontFamily: "sans",
                fontWeight: "bold",
                fontSize: "16px",
                margin: "4px",
                "&:hover": {
                  backgroundColor: "#4c1d95",
                },
              }}
              onClick={() => handleBookNow("deluxe")}
            >
              Book Now
            </Button>
          </div>
        </div>

        {/* Card 2: Luxury Suite */}
        <div className="border shadow-lg rounded-lg overflow-hidden w-74 h-[37rem] mx-auto flex flex-col justify-between">
          <img
            src="/hotel.jpg" // Make sure you have this image in your public directory
            alt="Luxury Suite"
            className="w-full h-72 object-cover"
          />
          <div className="p-4 text-center flex-grow">
            <h2 className="text-2xl font-bold font-serif mb-2 cursor-pointer hover:text-purple-600">
              Luxury Suite
            </h2>
            <p className="bg-blue-100 text-blue-800 rounded-full py-1 px-3 text-sm font-medium mb-1 inline-block">
              For 2 Persons
            </p>
            <p className="text-gray-600 text-lg mb-3">
              Beginning fourth dominion creeping god was. Beginning, which fly
              yieldi dry beast moved blessed
            </p>
            <p className="text-2xl font-bold text-black mb-2 font-serif cursor-default">
              $180 / night
            </p>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#6d28d9",
                color: "#ffffff",
                padding: "12px 24px",
                fontFamily: "sans",
                fontWeight: "bold",
                fontSize: "16px",
                margin: "4px",
                "&:hover": {
                  backgroundColor: "#4c1d95",
                },
              }}
              onClick={() => handleBookNow("luxury")}
            >
              Book Now
            </Button>
          </div>
        </div>

        {/* Card 3: Family Suite */}
        <div className="border shadow-lg rounded-lg overflow-hidden w-74 h-[37rem] mx-auto flex flex-col justify-between">
          <img
            src="/family.jpg" // Make sure you have this image in your public directory
            alt="Family Suite"
            className="w-full h-72 object-cover"
          />
          <div className="p-4 text-center flex-grow">
            <h2 className="text-2xl font-bold font-serif mb-2 cursor-pointer hover:text-purple-600">
              Family Suite
            </h2>
            <p className="bg-blue-100 text-blue-800 rounded-full py-1 px-3 text-sm font-medium mb-1 inline-block">
              For 4 Persons
            </p>
            <p className="text-gray-600 text-lg mb-3 font-serif text-center">
              Beginning fourth dominion creeping god was. Beginning, which fly
              yieldi dry beast moved blessed
            </p>
            <p className="text-2xl font-bold text-black mb-2 font-serif cursor-default">
              $220 / per night
            </p>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#6d28d9",
                color: "#ffffff",
                padding: "12px 24px",
                fontFamily: "sans",
                fontWeight: "bold",
                fontSize: "16px",
                margin: "4px",
                "&:hover": {
                  backgroundColor: "#4c1d95",
                },
              }}
              onClick={() => handleBookNow("family")}
            >
              Book Now
            </Button>
          </div>
        </div>

        {/* Card 4: Presidential Suite */}
        <div className="border shadow-lg rounded-lg overflow-hidden w-74 h-[37rem] mx-auto flex flex-col justify-between">
          <img
            src="/pres.jpg" // Make sure you have this image in your public directory
            alt="Presidential Suite"
            className="w-full h-72 object-cover"
          />
          <div className="p-4 text-center flex-grow">
            <h2 className="text-2xl font-bold font-serif mb-2 cursor-pointer hover:text-purple-600">
              Presidential Suite
            </h2>
            <p className="bg-blue-100 text-blue-800 rounded-full py-1 px-3 text-sm font-medium mb-1 inline-block">
              For 2 Persons
            </p>
            <p className="text-gray-600 text-lg mb-3">
              Beginning fourth dominion creeping god was. Beginning, which fly
              yieldi dry beast moved blessed
            </p>
            <p className="text-2xl font-bold text-black mb-2 font-serif cursor-default">
              $300 / per night
            </p>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#6d28d9",
                color: "#ffffff",
                padding: "12px 24px",
                fontFamily: "sans",
                fontWeight: "bold",
                fontSize: "16px",
                margin: "4px",
                "&:hover": {
                  backgroundColor: "#4c1d95",
                },
              }}
              onClick={() => handleBookNow("presidential")}
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rooms;
