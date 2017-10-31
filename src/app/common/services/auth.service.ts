import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import { ILoginUser } from "../../models/account";
import { BaseService } from "../baseService";
@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;
  // currentUser:UserModel={userId:"",email:"",lastLoginTime:"",lastLoginIP:"",status:"",phone:"",isDelete:false,createDate:"",modifyByUserId:"",createByUserId:"",role={userId:"",userInfoId:"",}};
  currentUser:ILoginUser;
  // store the URL so we can redirect after logging in
  redirectUrl: string;
  constructor(){
  }
  login(): Observable<boolean> {
    var loginState=sessionStorage.get("loginState");
    if(loginState){
      sessionStorage.set("loginState",true);
    }
    else{sessionStorage.set("loginState",true);}
    return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
  }
  loginAuth(user:any):Observable<boolean>{
    //need to save the user, role and permission information in here.
    var loginState=sessionStorage.get("loginState");
    var userInfo=sessionStorage.get("user");
    if(loginState){
      sessionStorage.set("loginState",true);
      sessionStorage.set("user",user.rerutnModel);
    }
    else{
      sessionStorage.set("loginState",true);
      sessionStorage.set("user",user.rerutnModel);
  }
    this.isLoggedIn=user.success;
    return Observable.of(this.isLoggedIn);
  }

  logout(): void {
    this.isLoggedIn = false;
    sessionStorage.remove("loginState");
    sessionStorage.remove("user");
  }
}
