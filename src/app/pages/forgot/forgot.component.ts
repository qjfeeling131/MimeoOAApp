import { Component } from "@angular/core";
import { Router,NavigationExtras} from '@angular/router'


import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';
@Component({
    selector:'moa-forgot',
    templateUrl:'./forgot.component.html',
    styleUrls:['./forgot.component.scss']
})

export  class ForgotComponent{
  resetUserInfo: any = {accountName:'', password:'', passwordAgina: '', verificationCode: ''};
  resetVerification: any = {accountName:'', password:'', passwordAgina: ''};
  resetErrorText: string = '';
  btnVerification: string = '验证码';
  btnReset: string = '发送邮件';

  public resetForm: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;
  public submitted: boolean = false;

  verificatEmail(){
    var email = this.resetUserInfo.accountName
    var re =new RegExp("^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$");
    var isPass = false;
    if (!email) {
      this.resetErrorText = '请输入邮箱！'
    } else if (!re.test(email)) {
      this.resetErrorText = '请输入有效的邮箱！'
    } else (
      isPass = true
    )
    return isPass;
  }
  sendEmail () {
    if (this.verificatEmail()) {
      alert('发送成功！')
    }
  }
  getVerificationCode () {
    this.resetErrorText = '验证码还在开发中...'
  }
  ngOnInit(): void {
    this.resetForm = new FormGroup({
      'accountName': new FormControl(this.resetVerification.accountName, [
        Validators.required,
        // forbiddenAccountNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
      ]),
      'password': new FormControl(this.resetVerification.password, [
        Validators.required,
        // forbiddenAccountNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
      ]),
      'passwordAgain': new FormControl(this.resetVerification.passwordAgain, [
        Validators.required,
        // forbiddenAccountNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
      ])
    });
  }
  test () {
    console.log('is comed')
  }
}