const API_ROOT =
  process.env.NODE_ENV === "production"
    ? "https://bujio.onrender.com/api"
    : "http://localhost:3001/api";

export default API_ROOT
