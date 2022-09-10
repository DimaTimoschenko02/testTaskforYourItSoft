import { IUser } from "../types/user.types";
import { IPost } from "../types/post.types";
import { makeAutoObservable, runInAction, toJS } from "mobx";
import userService from "../services/user.service";
import postService from "../services/post.service";

//yes all that musnt be in a single store , but when i realized that, there were to much to remake, sorry:)
export default class Store {
  user: IUser = {} as IUser;
  users: IUser[] = [];
  currentUsers: IUser[] = [];
  page: number = 0;
  maxPages: number = 0;
  posts: IPost[] = [];
  usersPerPage: number = 4;
  sortedUsers:IUser[] = []
  constructor() {

    this.setPage(0);
    this.setUsersPerPage(4);
    makeAutoObservable(this);
  }
  setUser(user: IUser) {

    runInAction(() => {
      this.user = user;
    });
    this.setPosts();
  }
  setUsersPerPage(num: number) {
    this.usersPerPage = num;
  }
  private setMaxPages(num: number) {
    this.maxPages = num;
  }
  setPage(page: number) {
    this.page = page;
    this.setCurrentUsers();
  }
  async setUsers() {
    const users = await userService.getUsers();

    runInAction(() => {
      this.users = users;
      this.sortedUsers = this.users
    });

    this.setMaxPages(Math.ceil(this.sortedUsers.length / this.usersPerPage) - 1);
    this.setCurrentUsers();
  }
  private setCurrentUsers() {
    const tmp = this.page * this.usersPerPage;
    let currentUsers = [...this.sortedUsers];
    this.currentUsers = currentUsers.slice(tmp, tmp + this.usersPerPage);
  }
  async setPosts() {
    this.posts = await postService.getPosts({ userId: this.user.id });
  }
  sortUsers(param:string){
    const temp = [...this.users]
    temp.sort(this.sortByField(param));
    this.sortedUsers = temp
    this.setCurrentUsers()
  }
  findUsers(name:string){
    this.sortedUsers = this.users.filter(user => user.name.toLowerCase().includes(name.toLocaleLowerCase()))
    this.setMaxPages(Math.ceil(this.sortedUsers.length / this.usersPerPage) - 1);
    this.setPage(0)
  }
  private sortByField(field: string) {
    return (a: IUser, b: IUser) => (a[field] > b[field] ? 1 : -1);
  }
}
