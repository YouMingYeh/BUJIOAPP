const API_ROOT =
  process.env.NODE_ENV === "production"
    ? "https://bujio.onrender.com/"
    : "http://localhost:3001/";

export default API_ROOT
