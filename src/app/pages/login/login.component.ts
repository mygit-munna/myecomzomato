import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private master:MasterService,private router:Router){}
  
  loginObj:any={
    "username": "",
    "password":""

  }


 




  onLogin(){
    this.master.login(this.loginObj).subscribe((res:any)=>{
console.log(this.loginObj.username)
if(res.result){
  localStorage.setItem("userUser",JSON.stringify(res.data));
  this.router.navigateByUrl('/foodCategory')
}else{
  alert(res.msg)
}
    })
  }

}
