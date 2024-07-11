import Cookies from "js-cookie";
import { GetUserInfoResponse } from "../../typesAndInterfaces/getUserInfo";
import { baseURL } from "../../components/constants/url";

async function getUserInfoFn(): Promise<GetUserInfoResponse> {
  const token = Cookies.get("token");

  const url = `${baseURL}/users/getUserInfo`;

  const res = await fetch(url, {
    method: "GET",
    headers: {
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
  const data: GetUserInfoResponse = await res.json();

  return data;
}
export default getUserInfoFn;
