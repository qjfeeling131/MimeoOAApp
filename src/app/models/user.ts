import { Role } from "./role";
import { IDepartment } from "./department";
export interface IUser {
    id?: String;
    name?: String;
    department?: IDepartment;
    role?: Role;
    email?: String;
    createTime?: String;
    actions?: String;
    categorys?: String;
}