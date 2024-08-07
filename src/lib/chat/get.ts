import Cookies from "js-cookie";
import { baseURL } from "../../components/constants/url";

export interface ChatResponse {
  message: string;
  result: Chat[];
}

export interface Chat {
  chat_id: number;
  sender_id: number;
  receiver_id: number;
  content: string;
  created_at: string;
}

async function getChatFn({
  sender_id,
}: {
  sender_id: string;
}): Promise<ChatResponse> {
  const token = Cookies.get("token");

  const url = `${baseURL}/chat?sender_id=${sender_id}`;

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
export default getChatFn;
