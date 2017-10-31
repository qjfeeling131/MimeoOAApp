import { Component, OnInit } from "@angular/core";

import { DepartmentSettingService } from "./department.service";
import { IDepartment } from "../../../models/department";
@Component({
    templateUrl:'./department.component.html',
    selector:'department-setting',
    styleUrls:['./department.component.scss']
})

export class DepartmentComponent implements OnInit{
    departments: IDepartment[];
    displayDialog: boolean;
    selectedDepartment: IDepartment;
    newDepartment: boolean;
    department: IDepartment = new PrimeDepartment();
    constructor(private departmentService:DepartmentSettingService){}
    ngOnInit() {
        this.getDepartments();
    }

    getDepartments() {
        this.departmentService.getDepartments().then(re=>{console.log(re);this.departments=re});
    }
     showDialogToAdd() {
        this.newDepartment = true;
        this.department = new PrimeDepartment();
        this.displayDialog = true;
    }
    
    save() {
        let departments = [...this.departments];
        if(this.newDepartment)
            departments.push(this.department);
        else
            departments[this.findSelectedCarIndex()] = this.department;
        
        this.departments = departments;
        this.department = null;
        this.displayDialog = false;
    }
    
    delete() {
        let index = this.findSelectedCarIndex();
        this.departments = this.departments.filter((val,i) => i!=index);
        this.department = null;
        this.displayDialog = false;
    }    
    
    onRowSelect(event) {
        this.newDepartment = false;
        this.department= this.cloneCar(event.data);
        this.displayDialog = true;
    }
    
    cloneCar(c: IDepartment): IDepartment {
        let department = new PrimeDepartment();
        for(let prop in c) {
            department[prop] = c[prop];
        }
        return department;
    }
    
    findSelectedCarIndex(): number {
        return this.departments.indexOf(this.selectedDepartment);
    }
}

class PrimeDepartment implements IDepartment {
    
    constructor(public id?, public name?, public createTime?, public creatorId?,public modifyId?,public modifyName?) {}
}