import api, { createHeader } from "../../services/axiosService";

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
