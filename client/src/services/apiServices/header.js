export default function createHeader() {
  const auth = localStorage.getItem("@Auth:token");

  const config = {
    headers: { Authorization: `Bearer ${auth?.token}` },
  };

  return config;
}
