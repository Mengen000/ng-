import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn:"root" //在根模块中提供该守卫
})
export class LoginGuard implements CanActivate{
  //判断后续的组件能否激活
  canActivate(){
    console.log('正在检查用户是否已经登陆')
    if(sessionStorage['loggedUname']){
      return true  //允许激活后续的组件
    }else{  //说明尚未登陆
      return false //禁止激活后续的组件
    }
  }
}