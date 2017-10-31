import { Component, ViewEncapsulation,OnInit } from '@angular/core';

import { TreeNode,Message } from "primeng/primeng";
import { RoleSettingService } from "./role.setting.service";
import { Role } from '../../../models/role';
@Component({
    templateUrl:'./role.setting.component.html',
    selector:'moa-role-setting',
    styleUrls:['./role.setting.component.scss'],
    encapsulation:ViewEncapsulation.None
})

export class RoleSettingComponent implements OnInit {
    roles: Role[];
    displayDialog: boolean;
    selectedRole: Role;
    newRole: boolean;
    role: Role = new PrimeRole();
    pageIndex: any = 1;
    pageSize: any = 10;

    constructor(private roleService:RoleSettingService){}

    ngOnInit() {
        this.getRoles();
    }

    getRoles() {
        this.roleService.getRoles(this.pageIndex, this.pageSize).then(re=>this.roles=re);
    }

    showDialogToAdd() {
        this.newRole = true;
        this.role = new PrimeRole();
        this.displayDialog = true;
    }
    
    save() {
        let roles = [...this.roles];
        if(this.newRole)
            roles.push(this.role);
        else
            roles[this.findSelectedCarIndex()] = this.role;
        
        this.roles = roles;
        this.role = null;
        this.displayDialog = false;
    }
    
    delete() {
        let index = this.findSelectedCarIndex();
        this.roles = this.roles.filter((val,i) => i!=index);
        this.role = null;
        this.displayDialog = false;
    }    
    
    onRowSelect(event) {
        this.newRole = false;
        this.role= this.cloneCar(event.data);
        this.displayDialog = true;
    }
    
    cloneCar(c: Role): Role {
        let role = new PrimeRole();
        for(let prop in c) {
            role[prop] = c[prop];
        }
        return role;
    }
    
    findSelectedCarIndex(): number {
        return this.roles.indexOf(this.selectedRole);
    }
}

class PrimeRole implements Role {
    constructor(public id?, public name?, public createTime?, public creatorId?,public modifyId?,public modifyName?) {}
}