import Cookies from "js-cookie";
import { baseURL } from "../../components/constants/url";

export interface GetStoryByUserIdResponse {
  stories: StoryByUserId[];
}

export interface StoryByUserId {
  story_id: number;
  story: string;
  user_id: number;
}

async function getStoryByUserIdFn(): Promise<GetStoryByUserIdResponse> {
  const url = `${baseURL}/story/getStoryByUserId`;

  const token = Cookies.get("token");

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
export default getStoryByUserIdFn;
