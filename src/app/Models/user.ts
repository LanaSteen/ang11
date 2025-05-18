export interface IUser {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  }
 

  export class User{
    id?: number;
    email!: string;
    first_name!: string;
    last_name!: string;
    avatar!: string;
  }


  export class regUser{
    email!: string;
    password!: string;
  }


  export class WebUser {
    email! : string ;
    password! : string;
    userType : UserType = UserType.Guest

  }

  export interface rameUser {
    email : string
    password : string
    userType : UserType 
  }

  export enum UserType {
     Admin = "Admin",
     Guest = "Guest",
     Employee = "Employee"
  }