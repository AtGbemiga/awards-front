import { baseURL } from "../../components/constants/url";
import { AncestriesPostCommentsResponse } from "../../typesAndInterfaces/ancestriesPostComments";

async function getAncestriesPostCommentsFn({
  ancestries_postid,
}: {
  ancestries_postid: string;
}): Promise<AncestriesPostCommentsResponse> {
  // returns the most current posts
  const url = `${baseURL}/ancestries/getCommentsByPostId?ancestries_postid=${ancestries_postid}`;

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
export default getAncestriesPostCommentsFn;
