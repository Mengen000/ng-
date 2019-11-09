import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { UrlService } from '../url.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  productList=[] //商品列表
  pno=0  //即将要加载的商品页号 PageNumber
  hasMore=true //还有更多数据

  @ViewChild('myInfinite',{static:false})
  myInfinite  //页面底部的"无限滚动组件"
  //注意：如果无穷滚动组件添加*ngIf 它就不再是静态组件
  constructor(
    private router:Router,
    private nav:NavController,
    private url:UrlService,
    private http:HttpClient
    ) { }

  ngOnInit() {
    // 组建初始化完成后，异步加载商品数据
    this.loadMore()
  }
  loadMore(){
    this.pno++  //即将要加载的页号+1
    
    this.http.get(this.url.productListApi+this.pno).subscribe((res:any)=>{
      //通知无穷滚动事件，异步加载已完成
      this.myInfinite.complete()

      if(this.pno>=res.pageCount){
      this.hasMore=false
      }
      this.productList=this.productList.concat(res.data)
      // console.log(res)
    })
    
  }
  jumpToLogin(){
    //Angular中的路由跳转：脚本中跳转
    //Vue.js：this.$router
    this.router.navigateByUrl('/userlogin')
  }
  goBack(){
    this.nav.back()
  }
}
