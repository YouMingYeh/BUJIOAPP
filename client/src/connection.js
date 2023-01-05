const API_ROOT =
  process.env.NODE_ENV === "production"
    ? "https://bujio-production-e21b.up.railway.app"
    : "http://localhost:3001/";

export default API_ROOT
