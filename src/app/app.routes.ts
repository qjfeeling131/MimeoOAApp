import { LoadChildren } from '@angular/router/router';
import { Component } from '@angular/core/core';
import { componentFactoryResolverProviderDef } from '@angular/compiler/src/view_compiler/provider_compiler';
import { componentFactoryName } from '@angular/compiler/compiler';

export const appRoutes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginModule'
  },
  {
    path:'forgot',
    loadChildren:'./pages/forgot/forgot.module#ForgetModule'
  },
  {
    path: 'workspace',
    loadChildren: './workspace/workspace.module#WorkspaceModule'
  },
];
