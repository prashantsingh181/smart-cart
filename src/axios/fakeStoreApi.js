import axios from "axios";

const fakeStoreApi = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default fakeStoreApi;
