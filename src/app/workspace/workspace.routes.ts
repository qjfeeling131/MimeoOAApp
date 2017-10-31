import { LoadChildren } from '@angular/router/router';
import {WorkspaceComponent} from './workspace.component';
// import {PageNotFoundComponent} from '../not-found.component';

export const workspaceRoutes = [
  {
    path: '',
    component: WorkspaceComponent,
    children: [
      {
        path: '', redirectTo: 'pages-dashboard', pathMatch: 'full'
      },
      {
        path:'pages-dashboard',
        loadChildren: '../pages/dashboard/dashboard.module#DashbardModule'
      },
       {
        path:'user-setting',
        loadChildren: '../pages/setting/user/user.setting.module#UserSettingModule'
      },
             {
        path:'role-setting',
        loadChildren: '../pages/setting/role/role.setting.module#RoleSettingModule'
      },
    {
        path:'department-setting',
        loadChildren:'../pages/setting/department/department.module#DepartmentSettingModule'
    }
      ]
  }
];
