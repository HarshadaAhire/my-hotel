"use client";
import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
// import CategorySearch from "../components/categorySearch";
import HotelList from "../components/HotelList";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";

function Home() {
  // const [HotelList, setHotelList] = useState([]);
  // useEffect(() => {
  //   GetHotelList();
  // }, []);
  // const GetHotelList = () => {
  //   GlobalApi.GetHotelList().then((resp) => {
  //     console.log(resp.data.data);
  //     setHotelList(resp.data.data);
  //   });
  // };
  return (
    <div>
      {/* <Login /> */}
      <Hero />
      {/* <CategorySearch /> */}
      {/* <HotelList HotelList={HotelList} /> */}
      <HotelList />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default Home;
