import Cookies from "js-cookie";
import { baseURL } from "../../components/constants/url";

async function createCommentFn({
  video_id,
  userComment,
}: {
  video_id: string;
  userComment: string;
}) {
  const token = Cookies.get("token");

  const url = `${baseURL}/shortVideos/createComment`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ video_id, userComment }),
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
export default createCommentFn;
