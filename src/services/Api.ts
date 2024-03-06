import axios from "axios";
import { APIKEY, BaseUrl } from "./BaseUrl";

export const getAll = async () => {
  //   const queries = new URLSearchParams(query).toString();
  return await axios.get(`${BaseUrl}/v2/everything?q=keyword&apiKey=${APIKEY}`).then((res) => res.data.articles);
};
