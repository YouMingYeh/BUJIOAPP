const API_ROOT =
  process.env.NODE_ENV === "production"
    ? "http://localhost:3001/api"
    : "http://localhost:3001/api";

export default API_ROOT
