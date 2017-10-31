import { Role } from "./role";
import { IDepartment } from "./department";
export interface IUserRegister {
    userName: String;
    phoneNum?: Number;
    email?: String;
    password?: String;
    department?: any;
    role?: any;
    Authority?: any[];
}