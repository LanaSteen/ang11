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