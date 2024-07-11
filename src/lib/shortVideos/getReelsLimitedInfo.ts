import { baseURL } from "../../components/constants/url";
import { Response } from "../../typesAndInterfaces/shortVideos";

async function getReelsLimitedInfoFn(): Promise<Response> {
  const url = `${baseURL}/shortVideos`;

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
  const data: Response = await res.json();

  return data;
}
export default getReelsLimitedInfoFn;
