import Cookies from "js-cookie";
import { baseURL } from "../../components/constants/url";

export interface YourGroupResponse {
  yourGroups: YourGroup[];
}

export interface YourGroup {
  user_id: number;
  club_id: number;
  club_name: string;
  club_img: string;
}

export default async function clubMembershipFn(): Promise<YourGroupResponse> {
  const url = `${baseURL}/club/getGroupsByMemberId`;

  const token = Cookies.get("token");

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
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
