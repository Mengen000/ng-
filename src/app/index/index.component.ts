import { Component, OnInit, ViewChild } from '@angular/core';
import { UrlService } from '../url.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {

  @ViewChild('mySlides',{static:true})
  mySlides


  carouselItems=[] // 轮播广告
  newArrivalItems=[] // 新品上市
  recommendedItems=[] //首页推荐
  topSaleItems=[]  //热销推荐
  constructor(private url:UrlService,private http:HttpClient){

  }

  ngOnInit() { //当组件初始化完成后，异步请求服务器数据
    console.log(this.recommendedItems)
    this.http.get(this.url.indexApi).subscribe((res:any)=>{
      this.carouselItems=res.carouselItems //轮播图
      this.newArrivalItems=res.newArrivalItems
      this.recommendedItems=res.recommendedItems
      this.topSaleItems=res.topSaleItems
      // console.log(this.recommendedItems)
      // console.log(this.newArrivalItems)
      console.log(this.topSaleItems)
    });
    this.mySlides.startAutoplay();
  }

}
