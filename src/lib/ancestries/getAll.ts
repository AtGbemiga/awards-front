import { baseURL } from "../../components/constants/url";
import { AncestriesPostResponse } from "../../typesAndInterfaces/ancestries";
async function getAllAncestriesPostFn(): Promise<AncestriesPostResponse> {
  // returns the most current posts
  const url = `${baseURL}/ancestries/getAllAncestriesPosts`;

  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
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
export default getAllAncestriesPostFn;
