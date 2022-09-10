import axios, { Axios, AxiosResponse } from "axios";
import {IPostsQuery} from '../types/post.types'


interface IRequest {
  url: string;
  query?:IPostsQuery
}

export default class HttpService {
  serverUrl: string | undefined;
  fetchingService: Axios;
  constructor(
    serverUrl = "https://jsonplaceholder.typicode.com",
    fetchingService = axios,
  ) {
    this.serverUrl = serverUrl;
    this.fetchingService = fetchingService;
  }
  private createQuery<T extends {}>(query: T) {
    return new URLSearchParams(query);
  }

  private getFullApiUrl(url: string) {
    return `${this.serverUrl}/${url}`;
  }
  
  
 
  protected getAll(req: IRequest) {
    if(req.query){
        const query = this.createQuery(req.query)
        return this.fetchingService.get(this.getFullApiUrl(req.url)+ '?' + query);
    }
    return this.fetchingService.get(this.getFullApiUrl(req.url));
  }

  protected getOne(req: IRequest) {
    
  }

  protected create(req: IRequest) {
   
  }

  protected update(req: IRequest) {
   
  }

  protected delete(req: IRequest) {
   
  }
}
