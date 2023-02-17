import axios from "axios";

const token = localStorage.getItem("token");
const admin_token = localStorage.getItem("admin_token");

export const userInstance = axios.create({
  baseURL: "https://phplaravel-943133-3282971.cloudwaysapps.com/api",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
export const adminInstance = axios.create({
  baseURL: "https://phplaravel-943133-3282971.cloudwaysapps.com/api/admin",
  headers: {
    Authorization: `Bearer ${admin_token}`,
  },
});
