import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions,Request } from "@angular/http";

import { BaseService } from "../../../common/baseService";
import { IUser } from "../../../models/user";
import { ICategory } from "../../../models/category";

@Injectable()
export class UserSettingService {
    constructor(public baseService:BaseService){}

    getUsersUrl = '/api/User/getUsers';
    getCategorysUrl = 'assets/data/category.json';

    setUserUrl = 'assets/data/user.json';
  
    getUsers(pageindex?: any, pageSize?: any): Promise<IUser[]> {
        let getUsersUrl = this.getUsersUrl + '/' + pageindex + '/' + pageSize;
        return this.baseService.getAsync(getUsersUrl).then(re=>{
            return <IUser[]>re.data
        });
    }

    getCategorys(): Promise<ICategory[]> {
        return this.baseService.getAsync(this.getCategorysUrl,"","yes").then(re=>{
            return <ICategory[]>re.data
        });
    }
    
    saveUserRegisterInfo(userRegisterInfo: JSON): Promise<any> {
        return this.baseService.postAsync(this.setUserUrl, userRegisterInfo).then(re=>{
            return <ICategory[]>re.data
        });
    }
}