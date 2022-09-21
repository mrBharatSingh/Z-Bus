import { Component, OnInit } from '@angular/core';
import { LocationService } from '../service/location.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  userResult:any;
  constructor(private userService:LocationService) { }

  ngOnInit(): void {
  }
  checkUser(val:any){
    this.userService.loginUser(val).subscribe((result:any)=>{
      console.warn(result.result)
      if(result.result=="password is match")
      {
        this.userResult=result.result
      }
    })
    
    console.log(val)
  }
}
