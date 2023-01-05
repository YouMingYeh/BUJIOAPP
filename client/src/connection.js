const API_ROOT =
  process.env.NODE_ENV === "production"
    ? "http://localhost:3001/"
    : "http://localhost:3001/";

export default API_ROOT
