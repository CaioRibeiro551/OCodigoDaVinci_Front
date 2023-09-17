import Axios from "axios";

export default Axios.create({
  baseURL: " https://api-contacts.pedagogico.cubos.academy",
  timeout: 5000,
  headers: { "Content-Type": "Application/json" },
});
