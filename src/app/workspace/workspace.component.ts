import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot} from '@angular/router';
import {IMenu, IMessage} from '../common/moaMenu/menu.model';
import {beforeUrl} from '../common/animation';
import {trigger, state, style, animate, transition} from '@angular/animations';
import {WorkspaceService} from './workspace.service';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss'],
  animations: [
    trigger('menuState', [
      state('inactive', style({
        left: '0px'
      })),
      state('active', style({
        left: '-155px'
      })),
      transition('inactive => active', animate('200ms ease-in')),
      transition('active => inactive', animate('200ms ease-out'))
    ]),
    trigger('routerState', [
      state('inactive', style({
        marginLeft: '200px'
      })),
      state('active', style({
        marginLeft: '50px'
      })),
      transition('inactive => active', animate('200ms ease-in')),
      transition('active => inactive', animate('200ms ease-out'))
    ]),
    trigger('imgState', [
      state('inactive', style({
        left: '16px'
      })),
      state('active', style({
        left: '173px'
      })),
      transition('inactive => active', animate('200ms ease-in')),
      transition('active => inactive', animate('200ms ease-out'))
    ])
  ]
})
export class WorkspaceComponent implements OnInit {

  constructor(
    private myService: WorkspaceService,
    public router: Router) { };

  ngOnInit() {
    this.getMenu();
    if (true) {
      this.realname = sessionStorage.getItem('realname');
      this.realname = this.realname || 'anonymous';
    } else {
      // this.router.navigateByUrl("login");
    }
  }
  /*************************  ********************************/
  informationNumber: any = 18;                      //头部我的消息数量
  menus: IMenu[];                                    //菜单
  msgs: IMessage[] = [];                            //消息
  state: string = 'inactive';                      //菜单状态
  pTooltipIf: boolean = false;                     //pTooltipIf状态
  beforeUrl: string = beforeUrl;                   //api前缀地址
  timeout: any;                                    //错误信息时间
  realname: string;                                  //头部账号名字
  menumsg:string;
  /************************* 获取菜单 ********************************/
  getMenu() {
    this.myService.getMenu()
      .then(
        menus => this.menus = menus,
        error => {
          this.menumsg = '获取菜单失败,请刷新再试'
        }
      )
      .then(() => {
        if (this.menus) {
          sessionStorage.setItem('menu111', JSON.stringify(this.menus));
        }
    });
  }
  /************************* 改变左侧菜单宽度 ********************************/
  changeMenuWidth() {
    this.state = (this.state === 'active' ? 'inactive' : 'active');
    //dom操作
    let fa = document.getElementsByClassName('ui-accordion-header');
    if (this.state == 'active') {
      for (let i = 0; i < fa.length; i++) {
        fa[i].getElementsByTagName('span')[0].style.display = 'none';
      }
      this.pTooltipIf = true;
    } else {
      for (let i = 0; i < fa.length; i++) {
        fa[i].getElementsByTagName('span')[0].style.display = 'block';
      }
      this.pTooltipIf = false;
    }
  }
  /************************* 退出登录 ********************************/
  loginOut() {
    sessionStorage.removeItem('userToken');
    sessionStorage.removeItem('menu111');
    sessionStorage.removeItem('realname');
    this.router.navigateByUrl("login");
  }
}
