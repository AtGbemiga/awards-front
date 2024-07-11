import { baseURL } from "../../components/constants/url";
import { AllAwardsResponse } from "../../typesAndInterfaces/getAllAwards";

async function getAllAwardsFn(): Promise<AllAwardsResponse> {
  const url = `${baseURL}/vote`;

  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  // 404 and the likes gotten here
  if (!res.ok) {
    const exactErrorMsg = await res.json();

    throw new Error(
      `Request failed with status ${res.status}, ${exactErrorMsg.message}`
    );
  }

  // get good res at this stage
  const data: AllAwardsResponse = await res.json();

  return data;
}
export default getAllAwardsFn;
