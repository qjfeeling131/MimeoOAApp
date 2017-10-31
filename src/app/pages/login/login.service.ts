import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions,Request } from "@angular/http";

import { BaseService } from "../../common/baseService";

@Injectable()
export class LoginService{

    constructor(public baseService:BaseService){}

    tokenUrl='/api/Authorize';

    getTokenAsync(userName:string, password:string):Promise<any>{
        return this.baseService.postAsync(this.tokenUrl,{'accountName':userName,'password':password});
    }

}