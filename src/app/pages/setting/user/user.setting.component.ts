import { Component, ViewEncapsulation,OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';

import { PrimeNGSharedModule } from "../../../shared/primeNGSharedModule";
import { UserSettingService } from './user.setting.service';

import { IUser } from "../../../models/user";
import { ICategory } from "../../../models/category";
import { IUserRegister } from "../../../models/userRegister";
import { MenuItem } from "primeng/components/common/menuitem";
import { Message } from "primeng/components/common/message";

@Component({
    templateUrl:'./user.setting.component.html',
    selector:'moa-user-setting',
    styleUrls: ['./user.setting.component.scss'],
    encapsulation:ViewEncapsulation.None
})

export class UserSettingComponent implements OnInit {
    //所有用户信息模块
    users: IUser[];
    user: IUser;
    userInfos: IUser[];
    displayUserInfos: IUser[];
    searchUserInfo: any;
    getUsersParam: any = {
        pageIndex: 1,
        pageSize: 10
    };
    userAuthority: any = [{label: '管理员', value: 'admin'}, {label: '普通用户', value: 'generalUser'}];

    displayDialog: boolean;
    displayUserRegister: boolean;
    selectedUser: IUser;
    newUser: boolean;
    openCategory: boolean = false;
    isModify: boolean = false;

    sourceCategorys: ICategory[];
    unselectedCategorys: ICategory[];
    targetCategorys: ICategory[];
    categorys: ICategory[];
    constructor(
        private userSettingService: UserSettingService
    ) {};

    //用户注册模块
    items: MenuItem[];
    msgs: Message[] = [];
    activeIndex: number = 0;
    userRegister: any = {
        userName: "",
        phoneNum: "",
        email: "",
        password: "",
        department: "1",
        role: "1",
        Authority: [],
    };
    departmentOptions: any = [
        {label: '第一事业部', value: '1'}, 
        {label: '第二事业部', value: '2'},
        {label: '第三事业部', value: '3'},
        {label: '第四事业部', value: '4'},
        {label: '第五事业部', value: '5'},
    ];
    roleOptions: any = [
        {label: '超级管理员', value: '1'}, 
        {label: '一级管理员', value: '2'},
        {label: '二级管理员', value: '3'},
        {label: '普通管理员', value: '4'},
        {label: '普通用户', value: '5'},
    ];
    ngOnInit() {
        this.getUserInfos();
        this.getCategorys();
    }

    //搜索过滤用户信息
    searchUserInfoChange(value) {
        if (value.trim() !== "") {
            this.displayUserInfos = this.userInfos.filter(user => {
                var userInfoArray = [];
                for (var key in user) {
                    userInfoArray.push(user[key])
                }
                var userInfosString = userInfoArray.join("");
                return userInfosString.indexOf(value) > -1;
            });
        } else {
            this.displayUserInfos = this.userInfos
        }
    }

    showRegistrationPage() {
        this.items = [{
                label: 'User',
                command: (event: any) => {
                    this.activeIndex = 0;
                }
            },
            {
                label: 'department',
                command: (event: any) => {
                    this.activeIndex = 1;
                }
            },
            {
                label: 'Role',
                command: (event: any) => {
                    this.activeIndex = 2;
                }
            },
            {
                label: 'Authority',
                command: (event: any) => {
                    this.activeIndex = 3;
                }
            }
        ];
        this.displayUserRegister = true;
    }
    
    onRowSelect(event) {
        this.newUser = false;
        this.user = this.cloneCar(event.data);
        this.filterUnselectedCategorys(event['data'].category);
    }
    
    //过滤掉用户已有的categorys，剩下未有的categorys放在未选择框内
    filterUnselectedCategorys(categorys) {
        this.unselectedCategorys = this.sourceCategorys.filter(row => {
            var hasCategory = false;
            categorys.forEach(category => {
                if (category.id === row.id) hasCategory = true;
            });
            return !hasCategory;
        });
        this.displayDialog = true;
    }

    saveUserInfo() {
        let users = [...this.users];
        if(this.newUser)
            users.push(this.user);
        else
            users[this.findSelectedUserIndex()] = this.user;
        
        this.users = users;
        this.user = null;
        this.displayDialog = false;
    }
    
    save() {
        let users = [...this.users];
        if(this.newUser)
            users.push(this.user);
        else
            users[this.findSelectedUserIndex()] = this.user;
        
        this.users = users;
        this.user = null;
        this.displayDialog = false;
    }
    
    delete() {
        let index = this.findSelectedUserIndex();
        this.users = this.users.filter((val,i) => i!=index);
        this.user = null;
        this.displayDialog = false;
    }    
    
    findSelectedUserIndex(): number {
        return this.users.indexOf(this.selectedUser);
    }

    getUserInfos() {
        let pageIndex = this.getUsersParam.pageIndex;
        let pageSize = this.getUsersParam.pageSize;
        this.userSettingService.getUsers(pageIndex, pageSize).then(response => {
            console.log(response)
            this.displayUserInfos = this.userInfos = response;
        }, response => {
        });
    }
    
    getCategorys() {
        this.userSettingService.getCategorys().then(response => {
            this.sourceCategorys = response
        }, response => {
        });
    }

    //类别访问权限方法
    authorityChange (e) {
        var isChecked = e.checked;
    }

    saveUserRegister () {
        var userRegisterInfo = this.userRegister;
        console.log(userRegisterInfo)
        this.userSettingService.saveUserRegisterInfo(userRegisterInfo).then(response => {
            this.displayUserInfos = this.userInfos = response;
        }, response => {
        });
    }
    
    cloneCar(u: IUser): IUser {
        let user = new PrimeUser();
        for(let prop in u) {
            user[prop] = u[prop];
        }
        return user;
    }
}

class PrimeUser implements IUser {
    constructor(public id?, public name?, public department?, public role?, public email?, public createTime?, public actions?) {}
}
