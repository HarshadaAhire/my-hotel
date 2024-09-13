import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  const handleReserve = () => {
    navigate("/booking");
  };

  return (
    <div>
      <h1 className="font-bold text-center text-4xl md:text-6xl font-serif p-2 m-1">
        About Us
      </h1>
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative z-10 lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt="Hotel"
                  src="/pres.jpg"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="relative flex items-center bg-gray-100">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

              <div className="p-8 sm:p-16 lg:p-24">
                <p className="text-pretty p-3 text-purple-400 font-semibold text-xl">
                  ABOUT COZYSTAY HOTEL
                </p>
                <h2 className="text-4xl font-bold font-serif">
                  Most Recommended Hotel All Over the World
                </h2>

                <p className="mt-4 text-gray-500 font-sans text-lg">
                  Beginning blessed second a creepeth. Darkness wherein fish
                  years good air whose after seed appear midst evenin, appear
                  void give third bearing divide one so blessed moved firmament
                  gathered. Beginning blessed second a creepeth. Darkness
                  wherein fish years good air whose after seed appear midst
                  evenin, appear void give third bearing divide one so blessed.
                </p>

                <button
                  onClick={handleReserve}
                  className="mt-8 font-serif font-light inline-block rounded border border-purple-600 bg-purple-600 px-12 py-3 text-lg  text-white hover:bg-transparent hover:text-purple-900 focus:outline-none focus:ring active:text-purple-500"
                >
                  Reserve Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
