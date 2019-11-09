import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class UrlService{
  // 服务器基础地址
  server='http://www.codeboy.com/'
  // 首页数据api地址
  indexApi=this.server+'data/product/index.php';
  // 商品列表api地址
  productListApi=this.server+'data/product/list.php?pno='
  // 商品详情api地址
  productDetailApi=this.server+'data/product/details.php?lid='
  // 用户注册api地址
  userRegisterApi=this.server+'data/user/register.php'
  // 用户登录api地址
  userLoginApi=this.server+'data/user/login.php'
}