import http from "./HttpService";
import { handleError } from "../utils";
import axios from "axios";

export const FormsService = {
  createWaitList: async (data) => {
    try {
      // const res = await http.post('public/wait-list', data);
      // const res = await axios.get("https://www.google.com/");
      return { data: true }
    } catch (error: any) {
      handleError('createWaitList-createWaitList', error);
      return { data: null, error: error?.response?.data };
    }
  },
};
