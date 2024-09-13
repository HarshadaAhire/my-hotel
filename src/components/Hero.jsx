import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate("/booking"); // Replace "/booking" with the actual route for your booking page
  };

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              alt="Hotel"
              src="/hotel2.jpg"
              width={800}
              height={800}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Welcome to
              <span className="text-purple-500"> COZYSTAY</span>
            </h2>
            <p className="mt-4 text-gray-600">
              Escape to the beautiful mountains and valleys where dreams come
              true. Culture, nature, streams, and gastronomy await you. Immerse
              yourself in the restorative qualities of nature, far from everyday
              disturbances. Our experienced chefs create international
              specialties with unique flavors. Relax with gourmet cuisine and
              signature cocktails or homemade tonics, all enhanced by beautiful
              music and gorgeous views over the city.
            </p>

            <button
              onClick={handleBooking}
              className="mt-8 text-center inline-block rounded bg-purple-600  px-12 py-3 text-xl font-medium text-white transition hover:bg-purple-950 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
