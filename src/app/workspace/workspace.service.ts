import {Injectable} from '@angular/core';
// import {Http, Response, Headers, RequestOptions, Request} from '@angular/http';
import { BaseService } from "../common/baseService";
import {IMenu} from '../common/moaMenu/menu.model';


@Injectable()
export class WorkspaceService {
  constructor(private baseService: BaseService) { };

  //获取菜单
  private menuUrl = 'assets/data/sys-menu.json';

  getMenu(): Promise<IMenu[]> {
    let url = `${this.menuUrl}`;
    return this.baseService.getAsync(this.menuUrl,"","yes");
  }
}
