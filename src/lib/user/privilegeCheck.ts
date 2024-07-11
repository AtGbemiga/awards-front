import Cookies from "js-cookie";
import { baseURL } from "../../components/constants/url";

async function privilegeCheckFn(): Promise<{ message: string }> {
  const token = Cookies.get("token");

  const url = `${baseURL}/users/checkIsAdmin`;

  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  // check for if res fails
  if (!res.ok) {
    const exactErrorMsg = await res.json();
    throw new Error(
      `Request failed with status ${res.status}, ${exactErrorMsg.message}`
    );
  }

  // get good res at this stage
  const data = await res.json();

  return data;
}
export default privilegeCheckFn;
