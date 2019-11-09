import { Component, OnInit } from '@angular/core';
import { UrlService } from '../url.service';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit {
  uname=''  //登陆用户名
  upwd=''   //登陆密码
  constructor(
    private url:UrlService,
    private http:HttpClient,
    private ac:AlertController,
    private router:Router
    ) { }

  ngOnInit() {}
  doLogin(){
    console.log(this.uname,this.upwd)
    // 异步提交用户的输入给服务器API，验证登录结果
    let u=this.url.userLoginApi //请求地址
    let body=`uname=${this.uname}&upwd=${this.upwd}` //
    let opts={ //选项对象
      headers:{
        "Content-Type":'application/x-www-form-urlencoded'
      }   //请求头部
    }
    this.http.post(u,body,opts).subscribe((res:any)=>{
      if(res.code===200){ //登陆成功
        //在sessionStorage中记录当前的登陆用户名
        sessionStorage['loggedUname']=this.uname
        this.ac.create({
          header:"登陆成功",
          message:"欢迎回来"+this.uname,
          buttons:['确定']
        }).then((dialog)=>{
          dialog.present()
        })
        this.router.navigateByUrl('/index')
      }else{
        this.ac.create({
          header:"登陆失败",
          message:"错误原因"+res.msg,
          buttons:['确定']
        }).then((dialog)=>{
          dialog.present()
        })
      }
    })
  }
}
