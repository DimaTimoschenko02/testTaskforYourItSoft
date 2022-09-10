import axios, { Axios } from "axios";
import HttpService from "./http.service";
import { IPost, IPostsQuery } from "../types/post.types";
class PostService extends HttpService {
  url: string;
  fetchingService: Axios;
  constructor() {
    super();
    this.url = "posts";
    this.fetchingService = axios;
  }
  async getPosts(query?: IPostsQuery): Promise<IPost[]> {
    const { data } = await this.getAll({ url: this.url, query });
    return data;
  }

}

const postService = new PostService();
export default postService;
