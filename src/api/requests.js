import axios from "axios";
import config from "config";

export const getData = () => {
  return axios({
    method: "get",
    url: `${config.remoteApiUrl}`,
  }).then((result) => result.data);
};
