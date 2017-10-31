import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions,Request } from "@angular/http";


import { BaseService } from "../../common/baseService";

@Injectable()
export class ForgotService{

    constructor(public baseService:BaseService){}
    emailUrl='';

    sendEmial(accountName:string):Promise<any>{
        return this.baseService.postAsync(this.emailUrl,accountName);
    }
}