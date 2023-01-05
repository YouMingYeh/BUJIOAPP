const API_ROOT =
  process.env.NODE_ENV === "production"
    ? "https://bujioapp-production.up.railway.app"
    : "http://localhost:3001/";

export default API_ROOT
