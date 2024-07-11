import Cookies from "js-cookie";
import { baseURL } from "../../components/constants/url";

export default async function createClubPostFn(
  formData: FormData,
  club_id: string
) {
  const url = `${baseURL}/club/createClubPost?club_id=${club_id}`;

  const token = Cookies.get("token");

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(
      `Request failed with status ${response.status}, ${JSON.stringify(
        errorResponse
      )}`
    );
  }

  const data = await response.json();

  return data;
}
