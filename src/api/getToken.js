export function getToken() {
  const local = localStorage.getItem("user");
  if (local) {
    return JSON.parse(local).accessToken;
  }
  return "";
}
