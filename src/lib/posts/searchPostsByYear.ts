import { baseURL } from "../../components/constants/url";
import { Response } from "../../typesAndInterfaces/plan";

async function searchPostsByYear({
  year,
}: {
  year: string;
}): Promise<Response> {
  // returns the most current posts
  const url = `${baseURL}/posts/getPostsByYear?year=` + year;

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
export default searchPostsByYear;
