import { Component, OnInit } from '@angular/core';
import { LoginUserService } from '../login-user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user:User = new User();
  constructor(private loginUserService: LoginUserService) { }

  ngOnInit(): void {
  }
  userLogin(){
    console.log(this.user);
    this.loginUserService.loginUSer(this.user).subscribe(data=>{
      alert("login Successfully")
    },error=>("sorry please enter correct userId and password")
    )
  }
}
