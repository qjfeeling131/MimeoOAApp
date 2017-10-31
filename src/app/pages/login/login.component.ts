import { Component } from "@angular/core";
import { Router,NavigationExtras} from '@angular/router'

import { LoginService } from "./login.service";
import { AuthService } from "../../common/services/auth.service";
import { ILoginUser } from "../../models/account";
import { IRESTResult } from "../../models/restResult";
import { forbiddenNameValidator } from "../../shared/forbidden-name.directive";
import { LoaddingService } from "../../common/services/loadding.service";

import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector:'moa-login',
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.scss']
})

export  class LoginComponent{
  nameModel: any;
  psModel: any;
  btnLogin: string = '登　录';
  loginerrortext: string = '';
  userToken: string;
  realname: string;
  loginUserInfo: any={accountName:'',password:''};
  verificationInfo: any = {accountName:'', password:''};
  mimeoToken: string;
  page: string = 'login';
  loginForm: FormGroup;
  isLoadding: boolean = false;
  restResult:IRESTResult={code:0,message:"",data:""};

  public email:AbstractControl;
  public submitted:boolean = false;

  constructor(
    protected loginService:LoginService,
    protected authSerivce:AuthService,
    protected router:Router,
    private loadding: LoaddingService
  ) { }
  login(){
    if(true){
      this.isLoadding = true;
      this.loginService.getTokenAsync(this.loginUserInfo.accountName,this.loginUserInfo.password).then(result=>{
        this.isLoadding = false;
        this.restResult=result
        if(result){
          sessionStorage.setItem("mimeoOAToken",this.restResult.data);
          sessionStorage.setItem("loginState",'true');
          let redirect='/workspace';
          let navigationExtras:NavigationExtras={
            preserveQueryParams: true,
            preserveFragment: true
          }
          this.router.navigate([redirect]);
        } else {
          this.loginerrortext="Can't get token from MimeoOA";
        }
      }, response => {
        this.isLoadding = false;
      });
    }
  }
  verificatAccountName () {
    var verificatAccountName = this.loginUserInfo.accountName;
    var isPass = false;
    var vanre =new RegExp("(^1[0-9]{10}$)|(^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$)");
    if (!verificatAccountName) {
      this.verificationInfo.accountName = '请输入用户名！'
    } else if (!vanre.test(verificatAccountName)) {
      this.verificationInfo.accountName = '请输入有效的手机号码或者邮箱！'
    } else {
      this.verificationInfo.accountName = ''
      isPass = true;
    }
    return isPass;
  }
  verificatPassword () {
    this.verificatAccountName();
    var verificatPassword = this.loginUserInfo.password;
    var isPass = false;
    if (!verificatPassword) {
      this.verificationInfo.password = '请输入密码！'
    } else if (verificatPassword.length < 6) {
      this.verificationInfo.password = '请输入六位以上密码！'
    } else {
      this.verificationInfo.password = ''
      isPass = true;
    }
    return isPass;
  }
  test(): void {
    console.log('is comming!')
    this.loadding.show();
  }
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'accountName': new FormControl(this.loginUserInfo.accountName, [
        Validators.required,
        forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
      ]),
      'password': new FormControl(this.loginUserInfo.password, Validators.required)
    });
  }
  
  get accountName() { return this.loginForm.get('accountName'); }
    
  get password() { return this.loginForm.get('password'); }
}