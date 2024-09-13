import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaCoffee, FaWifi, FaBed, FaCheck } from "react-icons/fa"; // Icons for amenities

function Booking() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedRoomType, setSelectedRoomType] = useState("deluxe");

  const roomDetails = {
    deluxe: {
      title: "Deluxe Room",
      description: "A cozy and comfortable room with excellent amenities.",
      price: "$120 per night",
      img: "/deluxe.jpg", // Image URL
      amenities: [
        "Free Wi-Fi",
        "Coffee Machine",
        "Laundry Service",
        "Free Breakfast",
      ],
    },
    luxury: {
      title: "Luxury Suite",
      description: "A spacious luxury suite with modern furnishings.",
      price: "$180 per night",
      img: "/fa.jpg",
      amenities: [
        "Free Wi-Fi",
        "Coffee Machine",
        "Private Balcony",
        "Free Breakfast",
      ],
    },
    family: {
      title: "Family Suite",
      description: "A large suite perfect for families, with plenty of space.",
      price: "$220 per night",
      img: "/hotel2.jpg",
      amenities: [
        "Free Wi-Fi",
        "Laundry Service",
        "Kids Play Area",
        "Free Breakfast",
      ],
    },
    presidential: {
      title: "Presidential Suite",
      description: "Our finest suite, offering unmatched luxury and comfort.",
      price: "$300 per night",
      img: "/pres.jpg",
      amenities: ["Free Wi-Fi", "Jacuzzi", "Butler Service", "Free Breakfast"],
    },
  };

  // Handle selection change
  const handleSelectRoom = (roomType) => {
    setSelectedRoomType(roomType);
    navigate(`/booking?roomType=${roomType}`);
  };

  const queryParams = new URLSearchParams(location.search);
  const roomTypeFromQuery = queryParams.get("roomType");
  const roomType = roomTypeFromQuery || selectedRoomType;
  const room = roomDetails[roomType] || {};

  return (
    <div className="p-4 lg:p-10">
      {/* Room Selection Tabs */}
      <div className="flex justify-center mb-8 flex-wrap">
        {Object.keys(roomDetails).map((type) => (
          <button
            key={type}
            onClick={() => handleSelectRoom(type)}
            className={`px-4 py-2 m-2 text-white font-bold rounded transition ${
              selectedRoomType === type
                ? "bg-purple-600 hover:bg-purple-900"
                : "bg-gray-400 hover:bg-purple-500"
            }`}
          >
            {roomDetails[type].title}
          </button>
        ))}
      </div>

      {/* Main Content: Amenities on the Left, Booking Form on the Right */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Left Side - Amenities */}
        <div className="lg:w-1/2 lg:pr-10 mb-8 lg:mb-0">
          <img
            src={room.img}
            alt={room.title}
            className="w-full h-64 object-cover rounded-lg shadow-lg mb-4 lg:mb-10"
          />
          <h2 className="text-3xl font-bold font-serif mb-4">{room.title}</h2>
          <p className="mb-4 text-xl">{room.description}</p>
          <p className="text-xl font-bold font-serif mb-6">{room.price}</p>

          {/* Amenities */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {room.amenities.map((amenity, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 hover:text-purple-900 transition"
              >
                {index === 0 && <FaWifi size={24} />}
                {index === 1 && <FaCoffee size={24} />}
                {index === 2 && <FaBed size={24} />}
                {index === 3 && <FaCheck size={24} />}
                <p>{amenity}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Booking Form */}
        <div className="w-full lg:w-1/2">
          <div className="mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg">
              <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
                Book Your Stay
              </h1>

              <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Obcaecati sunt dolores deleniti inventore quaerat mollitia?
              </p>

              <form
                action="#"
                className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
              >
                <p className="text-center text-lg font-medium">
                  Check Availability
                </p>

                <div>
                  <label htmlFor="checkin" className="sr-only">
                    Check-in
                  </label>

                  <div className="relative">
                    <input
                      type="date"
                      className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                      placeholder="Enter check-in"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="checkout" className="sr-only">
                    Check-out
                  </label>

                  <div className="relative">
                    <input
                      type="date"
                      className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                      placeholder="Enter check-out"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="block w-full rounded-lg bg-purple-600 px-5 py-3 text-sm font-medium text-white"
                >
                  Book Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
