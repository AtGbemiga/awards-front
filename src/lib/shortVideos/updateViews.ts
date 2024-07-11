import { baseURL } from "../../components/constants/url";

async function updateVideoViewsFn({ video_id }: { video_id: number }) {
  const url = `${baseURL}/shortVideos/updateVideoViewsCount?video_id=${video_id}`;

  const res = await fetch(url, {
    method: "PUT",
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
export default updateVideoViewsFn;
