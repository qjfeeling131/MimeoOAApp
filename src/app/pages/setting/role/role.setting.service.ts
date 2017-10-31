import { Injectable } from "@angular/core";
import { BaseService } from "../../../common/baseService";
import { Role } from "../../../models/role";
import { IRESTResult } from "../../../models/restResult";

@Injectable()
export class RoleSettingService{
    constructor(public baseService:BaseService){}

    getRoleUrl="/api/User/getRoles/";

    getRoles(pageIndex?: any, pageSize?: any):Promise<Role[]>{
        let getRoleUrl = "assets/data/role/role.json";
        getRoleUrl = this.getRoleUrl + pageIndex + '/' + pageSize;
        return this.baseService.getAsync(getRoleUrl).then(re=>{
            console.log(re);
            return <Role[]>re.data});
    }

    saveRole(roleInfo:Role){
        return this.baseService.postAsync("api/user/addnewrole",roleInfo);
    }
}