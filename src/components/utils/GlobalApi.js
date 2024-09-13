import axios from "axios";

// Use the environment variable defined in your .env file
const API_KEY = process.env.REACT_APP_STRAPI_API_KEY;

const axiosClient = axios.create({
  baseURL: "http://localhost:1337/api", // Strapi API base URL
  headers: {
    " Authorization": `Bearer ${API_KEY}`,
  },
});

const getCategory = () => axiosClient.get("categories?populate=*");
const getHotelList = () => axiosClient.get("hotels?populate=*");

export default {
  getCategory,
  getHotelList,
};
