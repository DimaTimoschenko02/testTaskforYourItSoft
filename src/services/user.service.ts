import axios, { Axios } from "axios";
import { IUser } from "../types/user.types";
import HttpService from "./http.service";

class UserService extends HttpService {
  url: string;
  fetchingService: Axios;
  constructor() {
    super();
    this.url = "users";
    this.fetchingService = axios;
  }

  async getUsers(): Promise<IUser[]> {
    const { data } = await this.getAll({ url: this.url });
    return data;
  }
}

const userService = new UserService();
export default userService;
