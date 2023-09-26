import Axios from "axios";

export default Axios.create({
  baseURL: "https://o-codigo-da-vinci.onrender.com",

  timeout: 20000,

  headers: { "Content-Type": "Application/json" },
});
