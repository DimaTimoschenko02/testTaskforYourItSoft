
//this type for fuction "sortByField" in store.ts, without this type it dosnt work
interface IObjectKeys {
    [key: string]: string;
  }

export interface IUser extends IObjectKeys{
    name:string;
    id:string;
    email:string;
    phone:string;
    website:string
}