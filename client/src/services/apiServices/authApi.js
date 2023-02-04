import api from "./axiosService";
import createHeader from "./header";

export async function getUserData() {
  const header = createHeader();
  const response = await api.get("/users", header);

  return response.data;
}

export async function save(body) {
  const header = createHeader();
  const response = await api.post("/users", body, header);

  return response.data;
}

export async function teste() {
  const response = await api.get("/status");

  return response.data;
}
