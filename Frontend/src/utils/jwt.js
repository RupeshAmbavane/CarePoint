import { jwtDecode } from "jwt-decode";

export default function parseJwt(token) {
  return jwtDecode(token);
}
