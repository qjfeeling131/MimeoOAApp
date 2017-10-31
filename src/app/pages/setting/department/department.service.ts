import { Injectable } from "@angular/core";

import { BaseService } from "../../../common/baseService";
import { IDepartment } from "../../../models/department";

@Injectable()
export class  DepartmentSettingService{

    getDepartmentsUrl = '/api/User/getDepartments';

    constructor(private baseService:BaseService){}


    getDepartments():Promise<IDepartment[]>{
        let getDepartmentsUrl = 'assets/data/department/department.json';
        getDepartmentsUrl = this.getDepartmentsUrl;
        return this.baseService.getAsync(getDepartmentsUrl).then(re=><IDepartment[]>re.data);
    }
    
}