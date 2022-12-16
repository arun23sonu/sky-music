import { URI } from "../../shared/utils/Constant/constants";

const getMusicData = async () => {
  const response = await fetch(URI);
  return await response.json();
};

export default getMusicData;
