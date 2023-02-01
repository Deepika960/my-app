import { Role } from "./role";

export class User {
    id: number | undefined;
    username: string | undefined;
    password: string | undefined;
    firstName: string | undefined;
    lastName: string | undefined;
    role: string;
    token?: string;

};

export class userData {
   userData: User[]= [
        {
          id: 1,
          username: "duncan",
          firstName: "deepika",
          lastName: "choudhary",
          role: "",
          password: "123"
        },
        {
          id: 2,
          username: "avb",
          firstName: "aaaa",
          lastName: "dfsdf",
          role: "admin",
          password: "s534"
        },
    
      ];
}

