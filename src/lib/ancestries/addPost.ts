import { baseURL } from "../../components/constants/url";
import { token } from "../user/getToken";
async function createAncestryPostFn(formData: FormData) {
  const url = `${baseURL}/ancestries`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
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
export default createAncestryPostFn;
