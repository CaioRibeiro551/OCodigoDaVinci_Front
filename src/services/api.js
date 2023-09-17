import Axios from "axios";

export default Axios.create({
  baseURL: "https://o-codigo-da-vinci.onrender.com",
  timeout: 5000,
  headers: { "Content-Type": "Application/json" },
});
