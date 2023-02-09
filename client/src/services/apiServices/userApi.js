import api from "./axiosService";
import createHeader from "./header";

export async function updateUser(body) {
  const header = createHeader();

  const response = await api.put("/users", body, header);

  return response.data;
}
