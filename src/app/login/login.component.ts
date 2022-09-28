import { Component, OnInit } from '@angular/core';
import { LocationService } from '../service/location.service';
import { SubjectService } from '../service/subject.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  userResult:any;
  constructor(private userService:LocationService,private userAuthentication:SubjectService) { }

  ngOnInit(): void {
  }
  checkUser(val:any){
    this.userService.loginUser(val).subscribe((result:any)=>{
      console.warn(result.result)
      if(result.result=="password is match")
      {
        this.userResult=result.result
        this.userAuthentication.userAuth.next(true)
      }
    })
    
    console.log(val)
  }
}
