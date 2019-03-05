import Axios from "axios";

export default Axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 88c14e7a407b01490a88ed767ed1c5ba4b10280318f26f6eb2d8b657cbd31c51"
  }
});

