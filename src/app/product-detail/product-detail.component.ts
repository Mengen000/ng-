import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UrlService } from '../url.service';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product=[]
  picList=[]
  constructor(
    private route:ActivatedRoute,
    private url:UrlService,
    private http:HttpClient,
    private nav:NavController
    ) { }

  ngOnInit() {
    // 组建初始化完成，开始读取上一页面传递过来的
    this.route.params.subscribe((data)=>{    
      let pid=data.pid
      // console.log(pid);
      // 根据商品编号，查询出该商品的详情
      this.http.get(this.url.productDetailApi+pid).subscribe((res:any)=>{
        this.product=res.details
        console.log(this.product)
      })
    })
  }
  goBack(){
    this.nav.back()
  }
}
